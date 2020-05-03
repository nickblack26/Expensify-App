import React from "react";

const EditExpensePage = (props) => {
	return <div>Edting the expense with the ID of {props.match.params.id}</div>;
};

export default EditExpensePage;
