import { Button } from '@mui/material';
import axios from 'axios';
import { Input } from '@mui/material';
import React,{Component} from 'react';
import UploadIcon from '@mui/icons-material/Upload';
class FileUploader extends Component {

	state = {
	selectedFile: null
	};
	
	onFileChange = event => {
	this.setState({ selectedFile: event.target.files[0] });
	
	};
	
	onFileUpload = () => {
	this.props.setIsAnalysing(true);
	const formData = new FormData();
	formData.append(
		"myFile",
		this.state.selectedFile,
		this.state.selectedFile.name
	);
	console.log(this.state.selectedFile);
	axios.post("http://localhost:4444/upload",formData, {
        withCredentials: false,
        headers: {
          Accept: 'multipart/form-data',
          "Content-Type": 'multipart/form-data',
          "Access-Control-Allow-Credentials": true,
        },
	
      }).then((res)=>{console.log(res);this.props.didClickOnAnalyse(res.data.data);this.props.setIsAnalysing(false);}
      ).catch((err)=>console.log(err));
	  

	};
	fileData = () => {
	
	if (this.state.selectedFile) {
		
		return (
		<div style={{display:"flex",gap:"25px",alignItems:"flex-end"}}>
			<p style={{color:"grey"}}>File Details:</p>
            <p style={{color:"black",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",padding:"5px"}}>File Name: {this.state.selectedFile.name}</p>
            <p style={{color:"black",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",padding:"5px"}}>File Type: {this.state.selectedFile.type}</p>
            
            <p style={{color:"black",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",padding:"5px"}}>
			Last Modified:{" "}
			{this.state.selectedFile.lastModifiedDate.toDateString()}
			</p>
		</div>
		);
	} else {
		return (
		<div>
			<br />
			<h4>Choose before Pressing the Upload button</h4>
		</div>
		);
	}
	};
	
	render() {
	
	return (
		<div style={{display:"flex",width:"100%",justifyContent:"flex-start",flexDirection:"column",alignItems:"center",marginTop:"10px"}}>

			<div style={{display:"flex",justifyContent:"space-around",height:"30px",gap:"5px",alignItems:"center"}}>
				<p style={{color:"black",fontWeight:"bold"}}>
					Please Upload A Pcap File
				</p>
                <Button
                variant="contained"
                component="label"
            >
                Choose File
                <input
                type="file"
                hidden
                onChange={this.onFileChange}
                />
            </Button>
				<Button variant={"contained"} onClick={this.onFileUpload} startIcon={<UploadIcon/>}>
				    Upload and analyse
				</Button>
			</div>
		{this.fileData()}
		</div>
	);
	}
}

export default FileUploader;
// <Input type="file" onChange={this.onFileChange} style={{width:"170px",height:"40px"}}/>