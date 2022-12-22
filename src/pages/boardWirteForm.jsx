import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom"
import { modifyBoard } from "../modules/board";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useState } from "react";


const BoardWriteForm = ()=>{
    const location = useLocation();
    const [board,setBoard] = useState(location.state);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const onChange = (e)=>{
        setBoard({...board , [e.target.name]: e.target.value})
    }
    const onModifyBoard = ()=>{
        dispatch(modifyBoard(board));
        navigate('/'+board.boardId)
    }
    return(
        <Container>
            <Row>
                <Col xs={1} >
                    {board.boardId}
                </Col>
                <Col>
                    <input
                        name="title" 
                        value={board.title} 
                        onChange={(e)=>{onChange(e)}}>
                    </input>
                </Col>
                <Col>
                    <Button onClick={onModifyBoard}>수정완료</Button>
                </Col>
            </Row>
            <Row>
                <Col>{board.userEmail}</Col>
            </Row>
            <Row className="my-4">
                <Col>
                    <textarea 
                        name="content"
                        onChange={(e)=>{onChange(e)}}>
                        {board.content}
                    </textarea>
                </Col>
            </Row>

        </Container>
    )
}

export default BoardWriteForm