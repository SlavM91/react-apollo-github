const initialState = {
    studentList: []
};

const studentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_STUDENT':
            return {
                ...state,
                studentList: [
                    ...state.studentList,
                    action.payload
                ]
            };
        case 'REMOVE_STUDENT':
            return {
                ...state,
                studentList: state.studentList.filter(student => student.id !== action.payload)
            };
        case 'EDIT_STUDENT':
            const updateStudentList = state.studentList.map((student) => {
                return student.id === action.payload.id ? action.payload : student
            });
            return {
                ...state,
                studentList: updateStudentList
            };
        default:
            return state
    }
};

export default studentsReducer