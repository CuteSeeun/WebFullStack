const Jumbotron = () => {
    return (
        <div className="jumbotron text-center" style={{ marginBottom: 0,
                                                        backgroundColor: "pink",
                                                      }}>
            <h1 style={{fontStyle: "italic", fontSize: "55px"}}>Todo-list</h1>
            <p>오늘 할 일은 내일로</p>
        </div>
    );
}

export default Jumbotron;