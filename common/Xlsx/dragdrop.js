import React, { useState, useEffect } from 'react';
import XLSX from 'xlsx';


export function DragDropFile({ handleFile, children }) {
	const suppress = (e) => { e.stopPropagation(); e.preventDefault(); };
	const handleDrop = (e) => { e.stopPropagation(); e.preventDefault();
		const files = e.dataTransfer.files;
		if(files && files[0]) handleFile(files[0]);
	};
    return (
		<div 
			onDrop={handleDrop} 
			onDragEnter={suppress} 
			onDragOver={suppress}
		>
		{children}
		</div>
	);
}

export function DataInput({ handleFile }) {
	const handleChange = (e) => {
		const files = e.target.files;
		if(files && files[0]) handleFile(files[0]);
	};

	return (
		<form className="form-inline">
			<div className="form-group">
				<label htmlFor="file">Drag or choose a spreadsheet file</label>
				<br />
				<input 
					type="file" 
					className="form-control" 
					id="file" 
					accept={SheetJSFT} 
					onChange={handleChange} 
				/>
			</div>
		</form>
	)
}

export function OutTable({ data, cols }) {
	return (
		<div className="table-responsive">
			<table className="table table-striped">
				<thead>
					<tr>{cols.map((c) => <th key={c.key}>{c.name}</th>)}</tr>
				</thead>
				<tbody>
					{data.map((r,i) => <tr key={i}>
						{cols.map(c => <td key={c.key}>{ r[c.key] }</td>)}
					</tr>)}
				</tbody>
			</table>
		</div>
	);
}


export const SheetJSFT = [
	"xlsx", "xlsb", "xlsm", "xls", "xml", "csv", "txt", "ods", "fods", "uos", "sylk", "dif", "dbf", "prn", "qpw", "123", "wb*", "wq*", "html", "htm"
].map(x => `.${x}`).join(",");

/* generate an array of column objects */
export const make_cols = refstr => {
	let o = [], C = XLSX.utils.decode_range(refstr).e.c + 1;
	for(var i = 0; i < C; ++i) o[i] = {name:XLSX.utils.encode_col(i), key:i}
	return o;
};

export default {
	make_cols,
	
	OutTable,
	DataInput,
	DragDropFile
}