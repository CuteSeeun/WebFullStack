

const CarDetailModal = ({ modalData }) => {
    return (
        <>
            {/* <!-- The Modal --> */}
            <div className="modal fade" id="detailModal">
                <div className="modal-dialog">
                    <div className="modal-content">

                        {/* <!-- Modal Header --> */}
                        <div className="modal-header">
                            <h4 className="modal-title">상세정보</h4>
                            <button type="button" className="close" data-dismiss="modal">×</button>
                        </div>

                        {/* <!-- Modal body --> */}
                        <div className="modal-body">
                            <table>
                                <tr>
                                    <th>no</th>
                                    <td>{modalData.no}</td>
                                </tr>
                                <tr>
                                    <th>name</th>
                                    <td>{modalData.name}</td>
                                </tr> <tr>
                                    <th>price</th>
                                    <td>{modalData.price}</td>
                                </tr> <tr>
                                    <th>company</th>
                                    <td>{modalData.company}</td>
                                </tr> <tr>
                                    <th>year</th>
                                    <td>{modalData.year}</td>
                                </tr>
                            </table>
                        </div>

                        {/* <!-- Modal footer --> */}
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default CarDetailModal;