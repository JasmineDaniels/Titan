

export default function Modal(){
    const styles = {
        backgroundColor: "blue", 
        fontColor: "#fff"  
    }
    return (
        <div className="modal" id="myModal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header d-flex justify-content-md-center" style={styles}>
                        <h5 className="modal-title"> Success!</h5>
                    </div>
                    <div className="modal-body mb-3">
                        <h4> Thank you so much for your Interest </h4> <br></br> <h5> I have recieved your message, <br></br> I will contact you shortly <br></br> 😃 </h5>
                    </div>
                    <div className="modal-footer d-flex justify-content-md-center">
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}