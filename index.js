function validateForm() {
	var recherche = $('#rechercheInput').val();
	
	$('#listeAteliers').empty();
	
	$.ajax({

		url : "http://resairislabservices.appspot.com/api/ateliers?query=" + recherche,
		//data :{},
		success:function(ateliers) {
			for (i in ateliers) {
				
				var card = '';
				card += '<div class="col s12 m6">';
				card += '<div class="card blue-grey darken-1">';
				card += '<div class="card-content white-text">';
				card += '<span class="card-title">' + ateliers[i].titre + '</span>';
				card += '<p>' + ateliers[i].description + '</p>';
				card += '</div>';
				card += '<div class="card-action">';
				card += '<a href="#">This is a link</a>';
				card += '<a href="#">This is a link</a>';
				card += '</div>';
				card += '</div>';
				card += '</div>';
				
				$('#listeAteliers').append(card);
			}
		
		},
		error:function() {
			alert("ERREUR");	
		}
		});
}

function sortieChampName() {
	alert("toto");
}