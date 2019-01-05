
const getInputs = () => {
	let name = document.getElementById("byWho").value.trim();
	let comment = document.getElementById("addedWhat").value.trim();	
	let temp = new Date();
	let date = `${(temp.getMonth() + 1)}:${temp.getDate()}:${temp.getFullYear()}`;

	document.getElementById("blogInputs").reset();
	let list = document.getElementById("overallList");
	while (list.firstChild) {
		list.removeChild(list.firstChild);
	}
	
	return [name, comment, date];
};

const getComments = () => {
	comments.forEach(item => {
		let liTemp = document.createElement("li");
		(item.replyId) ? liTemp.setAttribute("class", "reply") : liTemp.setAttribute("class", "entry")
		liTemp.setAttribute("id", item.id);

		let nameDiv = document.createElement("div");
		nameDiv.setAttribute("class", "name");
		let entryReply = "";
		(item.replyId) ? (entryReply = "Reply") : (entryReply = "Entry")
		let nameText = document.createTextNode(`${entryReply} by: ${item.name}`);
		nameDiv.appendChild(nameText);

		let divSpan = document.createElement("span");
		divSpan.setAttribute("class", "date");
		let spanText = document.createTextNode(item.date);
		divSpan.appendChild(spanText);
		nameDiv.appendChild(divSpan);
		liTemp.appendChild(nameDiv);

		let postDiv = document.createElement("div");
		postDiv.setAttribute("class", "post");
		let postText = document.createTextNode(item.comment);
		postDiv.appendChild(postText);
		liTemp.appendChild(postDiv);

		let replyInput = document.createElement("input");
		replyInput.setAttribute("class", "replyBtn");
		replyInput.setAttribute("type", "button");
		replyInput.setAttribute("value", "Add a Reply");
		liTemp.appendChild(replyInput);

		let whichId = "";
		(item.replyId) ? (whichId = item.replyId) : (whichId = "overallList")
		document.getElementById(whichId).appendChild(liTemp);
	});
};

window.onload = () => {
	getComments();
};

document.getElementById("button").addEventListener("click", () => {
	let theInputs = getInputs();
	comments.push({"id": comments.length, "replyId": "", "date": theInputs[2], "name": theInputs[0], "comment": theInputs[1]});
	getComments();	
});

document.getElementById("overallList").addEventListener("click", () => {
	let parentId = event.target.parentNode.id;
	let theInputs = getInputs();	
	comments.push({"id": comments.length, "replyId": parentId, "date": theInputs[2], "name": theInputs[0], "comment": theInputs[1]});
	getComments();
});



