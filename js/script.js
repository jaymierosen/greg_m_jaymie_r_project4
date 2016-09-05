//document ready
$(function() {
//create a big object containing all story traits.
	var storyTraits = {
		characters: {
			animal: ["three-toed sloth", "honey badger", "beaver", "blobfish", "moose", "bull frog", "penguin", "lady bug"],
			officerOfLaw: ["mall cop", "Mountie", "security guard", "beat cop", "bouncer"],
			celebrity: ["member of hit rock group, Nickelback (Chad Kroeger)", "celebrity superstar (Alan Thicke)", "former host of “UH OH” (Wink Yahoo)", "ghost (folk music trail-blazer Stompin’ Tom Conners)", "hit-maker (Anne Murray)", "trend-setter (Avril Lavigne)"],
			superhuman: ["space pirate", "mind-reader", "shape-shifter", "time-traveler", "shiny vampire"]
		},
		setting: {
			// place: "House of Commons",
			// era: ["1975", ""] 
			one: "gas station business in Manitoba",
			two: "House of Commons",
			three: "Bay Street stock exchange",
			four: "medical marijuana business"
		},
		personality: {
			kindHeart: ["A righteous", "An unrealistically optimistic", "A motherly", "A gentle", "A nieve", "A nurturing"],
			cynical: ["A miserable", "An embittered", "A love-burned", "A miserly", "A contemptuous", "A scornful", "A disgruntled"],
			aggressive: ["A domineering", "A quarrelsome", "A drunken", "A manipulative", "A street-fighting"],
			smooth: ["A flirtatious", "A coquettish", "A gaudy", "A saucy", "A frisky", "A sultry", "A seductive"]
		}

	}

//create five variables that will fit withing a string of text that will be the ultimate output.

//connect personal desire value from from to variable -- because we do not know the outcome of the user input

// decalre variables for all story traits

	var characterFinal;
	var settingFinal;
	var personalDesireFinal;
	var personalityTraitFinal;
	var networkNotesFinal;


	// console.log(outputStringFinal);


// SLIDE TOGGLE FOR NETWORK NOTES
	$('input[name=setting]').on('click', function(){
		$('.networkNotes').slideDown("slow");  
	});


//CLOSE UP NETWORK NOTES
	// $('input[name=standYourGround]').on('click', function(){
	// 	$('.networkOnly').slideUp("slow");  
	// });


//RADIO BUTTON LOGIC
	// if($('input[name=network]:checked') {
	// 	$('input[name=standYourGround]').prop('disabled', true);
	// };

	// greg
	// if($('input[name=network]').prop('disabled', false)) {
	// 	$('input[name=standYourGround]').prop('disabled', true);
	// };

	// if($('input[name=standYourGround]').prop('disabled', false)) {
	// 	$('input[name=network]').prop('disabled', true);
	// };

	// var checkInputs = function() {
	// 	if($('input[name=network]:checked').length > 0 ) {
	// 		$('input[name=standYourGround]').attr('disabled','disabled');
	// 	};
	// }
	

	// jaymie
	// $('input[name=network]').on('change', function(){
	// 	console.log('ruuning!')
	// 	checkInputs()
	// })
	// checkInputs()
	

	//if network notes radio buttons are checked, stand your ground == unchecked.

	//if stand your ground radio is checked, then network notes radio buttons are unchecked



	//if network notes is checked, add disabled property to stand your ground.

	//if stand your cround is clicked, remove disabled property from stand your ground and add disabled property to network notes.



// RESULT DISPLAY


//SECTION SCROLLING

	//PERSONALTY

$('input[name=character]').on('click', function(){

		$('html, body').animate({
		    scrollTop: $("#personalitySection").offset().top
		}, 1000);
		  
	});


	//PERSONALTY

$('input[name=personality]').on('click', function(){

		$('html, body').animate({
		    scrollTop: $("#desireSection").offset().top
		}, 1000);
		  
	});


	//NETWORK

$('input[name=setting]').on('click', function(){

		$('html, body').animate({
		    scrollTop: $("#networkSection").offset().top
		}, 1000);
		  
	});


	$('form').on('submit', function(event){
		event.preventDefault();


		//CHATACERS

		var characterSelected = $('input[name=character]:checked').val();

		var characterSelectedOptions = storyTraits.characters[characterSelected];

		// create randomizer for story traits that require randomization
		var characterFinal = characterSelectedOptions[Math.floor(Math.random() * characterSelectedOptions.length)]

		console.log(characterSelectedOptions)
		console.log(characterSelected);


		//PERSONALITY TRAITS

		var personalitySelected = $('input[name=personality]:checked').val();

		var personalitySelectedOptions = storyTraits.personality[personalitySelected];

		// create randomizer for story traits that require randomization
		var personalityTraitFinal = personalitySelectedOptions[Math.floor(Math.random() * personalitySelectedOptions.length)]


		// SETTING

		var settingFinal = $('input[name=setting]:checked').val();

		
		//PERSONAL DESIRE 

		var personalDesireFinal = $('textarea[name=personalDesire]').val();
		
		// NETWORK NOTES

		var networkNotesFinal = $('input[name=network]:checked').val();

		if(networkNotesFinal === undefined){
			networkNotesFinal = '';
		}

		var networkEdgyFinal = $('input[name=networkEdgy]:checked').val();

		if(networkEdgyFinal === undefined){
			networkEdgyFinal = '';
		}

		// connect final output to variables
		var outputStringFinal = `${personalityTraitFinal} ${characterFinal} throws it all away to make it big in the ${settingFinal}${networkNotesFinal}${networkEdgyFinal}.  All goes according to plan until the desire to ${personalDesireFinal} becomes too great to ignore.`


			// connect final output to HTML
			$('.logLine').html(`<p class="choice">${outputStringFinal}</p>`);
	
		$('.result').slideDown("slow"); 


		$('html, body').animate({
		    scrollTop: $("#resultSection").offset().top
		}, 1000);

	});//end of form submit event

	$('button').on('click', function(){
		$('.send').slideDown("slow");  
	});


	$('a[href*="#"]:not([href="#"])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });


	
});//end of document ready


//  CHECK YOUR SPELLING!!!!!










