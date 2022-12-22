import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom"
import { deleteBoard } from "../modules/board";
import { Button, Col, Container, Row } from "react-bootstrap";
const BoardPage = ()=>{
    const {id} = useParams();
    const boardList = useSelector((state)=>(state.board))
    const board = boardList.find((board)=>(board.boardId == id))
    
    const boardFind = useSelector((state)=>state.board.find((board)=>board.boardId==id))
    return (
        <div>
            <p>{board ? <BoardPrint board={board} /> : "없는 페이지입니다"}</p>
        </div>
    )
}
export default BoardPage

const BoardPrint = ({board})=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onDeleteBoard = (id)=>{
        dispatch(deleteBoard(id));
        navigate('/')
    }
    const toModifyBoard = (board)=>{
        navigate('/modifyform', {state:board})
    }

    return (
        <Container>
        <Row>
            <Col xs={1} >
                {board.boardId}
            </Col>
            <Col><h2>{board.title}</h2></Col>
            <Col>
                <Button onClick={()=>{toModifyBoard(board)}}>수정</Button>
                <Button onClick={()=>{onDeleteBoard(board.boardId)}}>삭제</Button>
            </Col>

        </Row>
        <Row>
            <Col>{board.userEmail}</Col>
        </Row>
        <Row className="my-4">
            <Col><h4>{board.content}</h4></Col>
        </Row>
        <Row>
            <Col><span>조회수 {board.view}</span></Col>
            <Col><span>좋아요 {board.like}</span></Col>
        </Row>

    </Container>
    )
}