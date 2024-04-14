import NotesItems from './components/NotesItems';
import NotesInput from './components/NotesInput';
import NotesHeading from './components/NotesHeading';

import './App.css';

function App() {
	let allNotes = [
		{
			"to_do" : "We will go to the GYM",
			"to_do_date" : "09-04-2024",
		},
		{
			"to_do" : "DSGF DFKGFKDGF KLKFF DFKD",
			"to_do_date" : "24-07-2024",
		},
		{
			"to_do" : "HF DFJG JDDSFGDF DJFGYUF GDGFKD FDM",
			"to_do_date" : "20-04-2024",
		},
		{
			"to_do" : "F DJFKJS FDFDSFD KJD FKLKDS KDSL",
			"to_do_date" : "09-06-2024",
		},
		{
			"to_do" : "J VVJV VG GFKDFD FGD KFKDFKFWEFREW KF",
			"to_do_date" : "05-05-2024",
		},
	];

	return (
		<div className="app vw-100 vh-100">
			<NotesHeading></NotesHeading>
			<NotesInput></NotesInput>
			<NotesItems allNotes={allNotes}></NotesItems>
		</div>
	);
}

export default App;
