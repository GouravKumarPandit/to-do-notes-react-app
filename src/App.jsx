import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="app vw-100 vh-100">
		<h3 className='text-center py-4 text-danger fw-bold to-do-heading'>To Do Notes React App</h3>
		<div className="row justify-content-center align-items-center mt-5">
			<div className="col-sm-4">
				<input type="text" className='form-control to-do-text' placeholder='Enter Your To Do Notes Here...' name="" id="" />
			</div>
			<div className="col-sm-2">
				<input type="date" className='form-control to-do-text' placeholder='DD-MM-YYYY' name="" id="" />
			</div>
			<div className="col-sm-2">
				<div className="btn btn-primary all-button">
					Add Notes
				</div>
			</div>
		</div>
		<div className="row justify-content-center align-items-center my-4">
			<div className="col-sm-4 rounded notes-data me-3">
				<p className='my-2'>We will go to the GYM</p>
			</div>
			<div className="col-sm-2 rounded notes-data ">
				<p className='my-2'>09-04-2024</p>
			</div>
			<div className="col-sm-2">
				<div className="btn btn-danger all-button">Delete</div>
			</div>
		</div>
		<div className="row justify-content-center align-items-center my-4">
			<div className="col-sm-4 rounded notes-data me-3">
				<p className='my-2'>DSGF DFKGFKDGF KLKFF DFKD</p>
			</div>
			<div className="col-sm-2 rounded notes-data ">
				<p className='my-2'>24-07-2024</p>
			</div>
			<div className="col-sm-2">
				<div className="btn btn-danger all-button">Delete</div>
			</div>
		</div>
		<div className="row justify-content-center align-items-center my-4">
			<div className="col-sm-4 rounded notes-data me-3">
				<p className='my-2'>HF DFJG JDDSFGDF DJFGYUF GDGFKD FDM</p>
			</div>
			<div className="col-sm-2 rounded notes-data ">
				<p className='my-2'>20-04-2024</p>
			</div>
			<div className="col-sm-2">
				<div className="btn btn-danger all-button">Delete</div>
			</div>
		</div>
		<div className="row justify-content-center align-items-center my-4">
			<div className="col-sm-4 rounded notes-data me-3">
				<p className='my-2'>F DJFKJS FDFDSFD KJD FKLKDS KDSL</p>
			</div>
			<div className="col-sm-2 rounded notes-data ">
				<p className='my-2'>09-06-2024</p>
			</div>
			<div className="col-sm-2">
				<div className="btn btn-danger all-button">Delete</div>
			</div>
		</div>
		<div className="row justify-content-center align-items-center my-4">
			<div className="col-sm-4 rounded notes-data me-3">
				<p className='my-2'>J VVJV VG GFKDFD FGD KFKDFKFWEFREW KF</p>
			</div>
			<div className="col-sm-2 rounded notes-data ">
				<p className='my-2'>05-05-2024</p>
			</div>
			<div className="col-sm-2">
				<div className="btn btn-danger all-button">Delete</div>
			</div>
		</div>
    </div>
  );
}

export default App;
