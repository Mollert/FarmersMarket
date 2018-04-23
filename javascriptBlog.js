
const getComments = () => {
	comments.forEach(function(item) {
		let liTemp = $('<li/>').attr('class', 'entry');
		let nameDiv = $('<div/>').attr('class', 'name').text(`Entry by: ${item.name}`);
		$(nameDiv).append($("<span class='date'></span>").text(item.date));
		let postDiv = $('<div/>').attr('class', 'post').text(item.comment);
		$(liTemp).append(nameDiv).append(postDiv);		

		$('#overallList').append(liTemp);
	});
};

$(window).on("load", function() {
	getComments();
});

$("#button").on("click", function() {	
	let name = $("#byWho").val().trim();
	let comment = $("#addedWhat").val().trim();
	let temp = new Date();
	let date = `${(temp.getMonth() + 1)}:${temp.getDate()}:${temp.getFullYear()}`;
	
	comments.push({"id": comments.length, "date": date, "name": name, "comment": comment});

	$("#byWho").val("");
	$("#addedWhat").val("");
	$("#overallList").empty();

	getComments();
});
