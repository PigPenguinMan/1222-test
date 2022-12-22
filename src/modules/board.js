const initialState = [
    {
        boardId : 1 ,
        userEmail : 'bigpenguinman@naver.com',
        title : '첫 게시물 입니다',
        content : '첫 게시물 내용',
        view : 0,
        like : 1 
    },
    {
        boardId : 2 ,
        userEmail : 'bigpenguinman@naver.com',
        title : '두번째 게시물 ',
        content : '두번째 게시물 내용',
        view : 0,
        like : 1 
    }
]

let boardId =3 

function board (state = initialState , action){
    switch (action.type) {
        case "deleteBoard":
           
            const newboardList = state.filter((board)=>( board.boardId != action.payload ));
            return newboardList;
        case "modifyBoard":
        
            const modifyboard = state.map(
                (board) => 
                (board.boardId == action.payload.boardId? action.payload : board)
                )
            return modifyboard;
        default :
            return state;
    }
}

export const modifyBoard = (board) => ({type:"modifyBoard",payload:board})
export const deleteBoard = (id) => ({type:"deleteBoard",payload:id})

export default board ; 