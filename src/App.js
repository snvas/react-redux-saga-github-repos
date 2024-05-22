import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGitsFetch } from './gitState';
import './App.css';

function App() {

	const gits = useSelector(state => state.gits.gits);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getGitsFetch());
	}, [dispatch]);
	console.log(gits);

	return (
		<div className="App">
			<h1>SORAIA NOVAES</h1>
			<p>Github Repositories</p>
			<hr />
			<div className="Gallery">
				{gits.map(git =>
					<div key={git.id} className="row">
						<div className="column column-left">
							<img src={git.owner.avatar_url} alt={git.name} width={150} height={150} />
						</div>
						<div className="column column-right">
							<h2>{git.name}</h2>
							<h5>Created at: {new Date(git.created_at).toLocaleDateString()}</h5>
							<h5>Language: {git.language}</h5>
							<a href={git.html_url}>Github</a>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default App;
