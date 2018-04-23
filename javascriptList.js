
$(window).on("load", function() {
	$('#offeringNote').append(`Here is our offering for the week ending in Saturday the ${satNum}${end}.`);	

	$('#ourVegetables').append('Our Vegetables:');
	vegetables.forEach((item) => {
	let liVeg = $('<li/>').attr('class', 'listItem');
	let imgVeg = `<img class="vegImage" src="${item.image}" alt="VegImage"/>`;
	let btnVeg = '<button type="button" class="vegBtn">Add to list</button>'
	$(liVeg).append(imgVeg).append(item.type).append(btnVeg);
	$('#vegList').append(liVeg);
	});

	$('#ourCannedGoods').append('Our Canned Goods:');
	cannedGoods.forEach((item) => {
	let liCan = $('<li/>').attr('class', 'listItem');
	let imgCan = `<img class="canImage" src="${item.image}" alt="CannedImage"/>`;
	let btnCan = '<button type="button" class="canBtn">Add to list</button>'
	$(liCan).append(imgCan).append(item.type).append(btnCan);
	$('#cannedList').append(liCan);
	});
});

let userIndex = null;

$("#getList").on("click", () => {
	let name = $("#userName").val().trim();
	let entry = $("#passWord").val().trim();

	userIndex = users.findIndex(x => x.username == name);
	
	$("#userName").val("");
	$("#passWord").val("");
	
	(!users[userIndex].list.length) ?
		$('#greeting').append(`Hello ${name}, you don't have a list yet.  Why don't you start one.`) :	
		$('#placeList').append("Here is your list.  Click on the basket to delete the item.");		
		(users[userIndex].list).forEach((item) => {
			addToList(item);
		});
});

const addToList = (item) => {
	if ($('#greeting').text()) {
		$('#greeting').empty();
		$('#placeList').append("Here is your list.  Click on the basket to delete the item.");		
	}
	let liTemp = $('<li/>').attr('class', 'entry');
	let imgTemp = `<img class="listImage" src="./image/basket.png" alt="ListImage"/>`;
	$(liTemp).append(imgTemp).append(item);
	$('#yourList').append(liTemp);
}

$('#vegList').on("click", ".vegBtn", function() {	
	if (userIndex !== null) {
		let veg = $(this).parent().text();
		veg = veg.replace("Add to list", "");
		users[userIndex].list.push(veg);
		addToList(veg);
	}
});

$('#cannedList').on("click", ".canBtn", function() {	
	if (userIndex !== null) {
		let canned = $(this).parent().text();
		canned = canned.replace("Add to list", "");
		users[userIndex].list.push(canned);
		addToList(canned);
	}
});

$('#yourList').on("click", ".listImage", function() {
	let delItem = $(this).parent().text();	
	users[userIndex].list = users[userIndex].list.filter(item => item !== delItem);
	$(this).parent().remove();
});

$("#logout").on("click", () => {
	$('#greeting').empty();
	$('#placeList').empty();		
	$('#yourList').empty();
});