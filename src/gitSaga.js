import { call, put, takeEvery } from 'redux-saga/effects';
import { getGitsSucess } from './gitState';

function* workGetGitsFetch() {
	const gits = yield call(() => fetch('https://api.github.com/users/snvas/repos'));

	const formattedgits = yield gits.json();
	// Ordena os repositórios por data de criação, em ordem decrescente
	const sortedgits = formattedgits.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

	const formattedgitsShortned = sortedgits.slice(0, 50);
	yield put(getGitsSucess(formattedgitsShortned));
}

function* gitSaga() {
	yield takeEvery('gits/getGitsFetch', workGetGitsFetch);
}

export default gitSaga;