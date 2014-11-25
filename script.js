$(document).ready(function() {
/*this function native to theme get in bootsniip*/
    $(document).mousemove(function(event) {
        TweenLite.to($("body"), 
        .5, {
            css: {
                backgroundPosition: "" + parseInt(event.pageX / 8) + "px " + parseInt(event.pageY / '12') + "px, " + parseInt(event.pageX / '15') + "px " + parseInt(event.pageY / '15') + "px, " + parseInt(event.pageX / '30') + "px " + parseInt(event.pageY / '30') + "px",
            	"background-position": parseInt(event.pageX / 8) + "px " + parseInt(event.pageY / 12) + "px, " + parseInt(event.pageX / 15) + "px " + parseInt(event.pageY / 15) + "px, " + parseInt(event.pageX / 30) + "px " + parseInt(event.pageY / 30) + "px"
            }
        })
    })

    /*Cronometro*/
	var segundo = 0+"0";
	var minuto = 0+"0";
	var hora = 0+"0";
	 
	function tempo(){ 
		alert('aquie');
	   if (segundo < 59){
	      segundo++
	      if(segundo < 10){segundo = "0"+segundo}
	   }else 
	      if(segundo == 59 && minuto < 59){
	         segundo = 0+"0";
	  minuto++;
	  if(minuto < 10){minuto = "0"+minuto}
	      }
	   if(minuto == 59 && segundo == 59 && hora < 23){
	      segundo = 0+"0";
	      minuto = 0+"0";
	      hora++;
	      if(hora < 10){hora = "0"+hora}
	   }else 
	      	if(minuto == 59 && segundo == 59 && hora == 23){
         		segundo = 0+"0";
	  			minuto = 0+"0";
	  			hora = 0+"0";
      		}
	   //form.cronometro.value = hora +":"+ minuto +":"+ segundo;
	   $("#timer").append("Time: "+hora +":"+ minuto +":"+ segundo);
	}
 	/*Expressa formulária de level*/
 	/*
 	l = level (1,2,3)
	x = total de quadradinhos
	y = elemento por linha x colunas
	z = fator de matriz (2)
	x = (l+z)*(l+z);
 	*/
 	var level = 2;
 	var lblLevel = "<b>"+level+"</b>";
	$('#level').append(lblLevel);

 	var semente = 2;
 	var pr_linha = (level+semente);
 	var total = pr_linha*pr_linha;
	var i = 0, j = 0; //base de loop
	var rand = pr_linha+(level*level);

	var cods = [];

	for (i = 0; i < parseInt(total/2); ++i) {
		do{
			var cod = Math.floor((Math.random() * rand) + 1);
			cods[i] = cod;
			var status = true;
			for(j = 0; j < i; j++){
				if(cods[i] == cods[j]){
					status = false;
				}
			}
		}while(status == false);
	}

	cods = cods.concat(cods);

	/*Esbi na tela os resultados*/
	var html = "";
	var qbr_linha = 1; //Controlar as linhas
	html += "<tr>";
	$('#label').append(html);

 	for( i=0 ; i < total ; i++ ) {

 		if(qbr_linha < pr_linha){
	 		html +="<td style='cursor:pointer;'>";
	 		/*Inactive*/
	 		html +="<span rell='"+cods[i]+"' id='"+i+"' style='height: 128px !important; width: 128px !important;'>";
			//html += cods[i];
				html +="<img src='miMeSweet-img/"+cods[i]+".png' height='128px' width='128px'>";
			html +="</span>";
			/*Active*/
		 		html +="<span rell='"+cods[i]+"' id='"+i+"' style='display:none; height: 128px !important; width: 128px !important;'>";
					html +="<img src='miMeSweet-img/"+cods[i]+".png' height='128px' width='128px'>";
				html +="</span>";
			html +="</td>";
			qbr_linha++;
		}else{
	 		html +="<td style='cursor:pointer;'>";
	 		/*Inactive*/
	 		html +="<span rell='"+cods[i]+"' id='"+i+"' style='height: 128px !important; width: 128px !important;'>";
			//html += cods[i];
				html +="<img src='miMeSweet-img/"+cods[i]+".png' height='128px' width='128px'>";
			html +="</span>";
			/*Active*/
		 		html +="<span rell='"+cods[i]+"' id='"+i+"' style='display:none; height: 128px !important; width: 128px !important;'>";
					html +="<img src='miMeSweet-img/"+cods[i]+".png' height='128px' width='128px'>";
				html +="</span>";
			html +="</td>";
			html +="</tr><tr>";
			qbr_linha = 1;
		}
 	}
 	html += "</tr>";
 	$('#label').append(html);

	/*Pegar o id do click*/
	var el = document.getElementById('label');
	var rel_oldClick = 0;
	var id_oldClick = -1;

	el.click(function() {
		$( this ).hide( 2000, function() {
			$( this ).remove();
		});
	});

	$( "span" ).click(function() {
		if(rel_oldClick == 0){
			$( this ).hide();
			rel_oldClick = $(this).attr("rell");
			id_oldClick = $(this).attr("id");
		}else{
			if(rel_oldClick == $(this).attr("rell")){
				$( this ).hide();
				rel_oldClick = -1;
			}else{
				$("#"+id_oldClick+" ").show();
				//console.log(id_oldClick);
				$("#"+id_oldClick+" ").show();
				//console.log(id_oldClick);
				id_oldClick = -1;
				//console.log(id_oldClick);
			}
			rel_oldClick = 0;
		}
	});

});