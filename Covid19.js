function createTag(element, elementClass="",elementID=""){
    var tag = document.createElement(element);
    if(elementClass !=="")
    tag.setAttribute("class",elementClass);
    if(elementID !=="")
    tag.setAttribute("id",elementID);
    return tag;
}
//trying out
async function callapi(){
    try{
        var resp = await fetch("https://covid-api.mmediagroup.fr/v1/cases");
        var obj = await resp.json();
        var data=[];
        for(var key in obj){
            data.push(obj[key]["All"]);   
        }
        var resp1 = await fetch("https://restcountries.eu/rest/v2/all");
        var restdata = await resp1.json();
        var div = createTag("div");
        var h1 = createTag("h1");
        h1.setAttribute("style","text-align:center; padding:20px;font-family:Times New Roman;");
        h1.innerText = "GLOBAL";
        var body = document.getElementById("content");
        div.append(h1);
        var container = createTag("div","container");
        var row = createTag("div","row");

        // card1

        var col1  = createTag("div","col-lg-3 col-sm-6");
        var card1 = createTag("div","card");
        card1.setAttribute("style","background-color:rgb(32, 32, 32); border-top:3px solid gray;padding:10px;margin-top:20px;");
        var cardhead = createTag("div");
        var span1 = createTag("p");
        span1.setAttribute("style","font-size:20px;padding:10px;margin-top:auto;margin-bottom:auto;");
        span1.innerHTML = "Total Cases";
        var i1 = createTag("i","material-icons");
        i1.setAttribute("style","font-size:35px;color:green;float:right;");
        i1.innerText = "coronavirus";
        span1.append(i1);
        cardhead.append(span1);
        var cardbody = createTag("div");
        var head1 = createTag("h3");
        head1.setAttribute("style","padding:10px;color:gray;");
        head1.innerText = data[data.length-1]["confirmed"];
        var cont1 = createTag("p");
        cont1.setAttribute("style","padding:10px;color:rgb(253, 77, 77);");
        cont1.innerText = `${Math.round((data[data.length-1]["confirmed"]*1000000)/data[data.length-1]["population"])} cases per million`;
        cardbody.append(head1,cont1);
        card1.append(cardhead,cardbody);
        col1.append(card1);

        //card2

        var col2  = createTag("div","col-lg-3 col-sm-6");
        var card2 = createTag("div","card");
        card2.setAttribute("style","background-color:rgb(32, 32, 32); border-top:3px solid rgb(26, 112, 211);padding:10px;margin-top:20px;");
        var cardhead2 = createTag("div");
        var span2 = createTag("p");
        span2.setAttribute("style","font-size:20px;padding:10px;margin-top:auto;margin-bottom:auto;");
        span2.innerHTML = "Active Cases";
        var i2 = createTag("i","material-icons");
        i2.setAttribute("style","font-size:40px;color:rgb(26, 112, 211);float:right;");
        i2.innerText = "masks";
        span2.append(i2);
        cardhead2.append(span2);
        var cardbody2 = createTag("div");
        var head2 = createTag("h3");
        head2.setAttribute("style","padding:10px;color:rgb(26, 112, 211);");
        var active = data[data.length-1]["confirmed"]-(data[data.length-1]["recovered"]+data[data.length-1]["deaths"]);
        head2.innerText = active;
        var cont2 = createTag("p");
        cont2.setAttribute("style","padding:10px;color:rgb(26, 112, 211);");
        cont2.innerText = `${Math.round((active*1000000)/data[data.length-1]["population"])} cases per million`;
        cardbody2.append(head2,cont2);
        card2.append(cardhead2,cardbody2);
        col2.append(card2);

        //card 3

        var col3  = createTag("div","col-lg-3 col-sm-6");
        var card3 = createTag("div","card");
        card3.setAttribute("style","background-color:rgb(32, 32, 32); border-top:3px solid rgb(26, 187, 26);padding:10px;margin-top:20px;");
        var cardhead3 = createTag("div");
        var span3 = createTag("p");
        span3.setAttribute("style","font-size:20px;padding:10px;margin-top:auto;margin-bottom:auto;");
        span3.innerHTML = "Recovered";
        var i3 = createTag("i","material-icons");
        i3.setAttribute("style","font-size:30px;color:rgb(26, 187, 26);float:right;");
        i3.innerText = "favorite";
        span3.append(i3);
        cardhead3.append(span3);
        var cardbody3 = createTag("div");
        var head3 = createTag("h3");
        head3.setAttribute("style","padding:10px;color:rgb(26, 187, 26);");
        head3.innerText = data[data.length-1]["recovered"];
        var cont3 = createTag("p");
        cont3.setAttribute("style","padding:10px;color:rgb(26, 187, 26);");
        cont3.innerText = `${((data[data.length-1]["recovered"]/data[data.length-1]["confirmed"])*100).toFixed(2)}% recovered`;
        cardbody3.append(head3,cont3);
        card3.append(cardhead3,cardbody3);
        col3.append(card3);

        // card4

        var col4  = createTag("div","col-lg-3 col-sm-6");
        var card4 = createTag("div","card");
        card4.setAttribute("style","background-color:rgb(32, 32, 32); border-top:3px solid rgb(253, 77, 77);padding:10px;margin-top:20px;");
        var cardhead4 = createTag("div");
        var span4 = createTag("p");
        span4.setAttribute("style","font-size:20px;padding:10px;margin-top:auto;margin-bottom:auto;");
        span4.innerHTML = "Deaths";
        var i4 = createTag("i","material-icons");
        i4.setAttribute("style","font-size:30px;color:rgb(253, 77, 77);float:right;");
        i4.innerText = "hotel";
        span4.append(i4);
        cardhead4.append(span4);
        var cardbody4 = createTag("div");
        var head4 = createTag("h3");
        head4.setAttribute("style","padding:10px;color:rgb(253, 77, 77);");
        head4.innerText = data[data.length-1]["deaths"];
        var cont4 = createTag("p");
        cont4.setAttribute("style","padding:10px;color:rgb(253, 77, 77);");
        cont4.innerText = `${((data[data.length-1]["deaths"]/data[data.length-1]["confirmed"])*100).toFixed(2)}% died`;
        cardbody4.append(head4,cont4);
        card4.append(cardhead4,cardbody4);
        col4.append(card4);
        row.append(col1,col2,col3,col4);
        container.append(row);


        //worst affected

        var container2 = createTag("div","container");
        var row1 = createTag("div","row");
        var col1 = createTag("col-12");
        col1.setAttribute("style","width:100%;padding:20px;padding-top:40px;");
        var tableheading = createTag("h2");
        tableheading.setAttribute("style","text-align:center; padding:20px;");
        tableheading.innerText = "Top 10 Affected Countries";
        var table1 = createTag("table","table");
        var thead1 = createTag("thead");
        table1.setAttribute("style","color:white;");
        theadtr1 = createTag("tr");
        var th1 = createTag("th");
        th1.innerText = "#";
        var th2 = createTag("th");
        th2.innerText = "Country";
        var th3 = createTag("th");
        th3.innerText = "Confirmed Cases";
        var th4 = createTag("th");
        th4.innerText = "Recovered";
        var th5 = createTag("th");
        th5.innerText = "Deaths";
        var th6 = createTag("th");
        th6.innerText = "Population";
        theadtr1.append(th1,th2,th3,th4,th5,th6);
        thead1.append(theadtr1);
        var tbody = createTag("tbody");
        var newdata = [...data];
        var result =[];
        var index=[];
        var ind=-1;
        for(var j=0;j<newdata.length-1;j++){
            result.push(newdata[j]["confirmed"]);
        }
        for(i=0;i<10;i++){
            var max=Math.max(...result);
            ind = result.indexOf(max);            
            index.push(ind);
            result[ind]=0;
        }
        for(i=0;i<10;i++){
            var tr = createTag("tr");
            var td1 = createTag("td");
            td1.innerText =i+1;

            //img
            var img="";
            for(j=0;j<restdata.length;j++){
                if(restdata[j].alpha2Code === data[index[i]]["abbreviation"]){
                    img=restdata[j].flag;
                    break;
                }
            }
            var td2 = createTag("td");
            var imgsrc = createTag("img");
            imgsrc.setAttribute("src",img);
            imgsrc.setAttribute("width","25px");
            imgsrc.setAttribute("height","25px");
            imgsrc.setAttribute("style","border-radius:50%;");
            var name = createTag("span");
            name.innerHTML = ` &nbsp;&nbsp; ${data[index[i]]['country']}`;
            td2.append(imgsrc,name);
            var td3 = createTag("td");
            td3.innerText = data[index[i]]["confirmed"];
            var td4 = createTag("td");
            td4.innerText = data[index[i]]["recovered"];
            var td5 = createTag("td");
            td5.innerText = data[index[i]]["deaths"];
            var td6 = createTag("td");
            td6.innerText = data[index[i]]["population"];
            tr.append(td1,td2,td3,td4,td5,td6);
            tbody.append(tr);
        }
        table1.append(thead1,tbody);
        col1.append(tableheading,table1);
        row1.append(col1);
        container2.append(row1);
        body.append(div,container,container2);
        
    }
    catch(error){
        console.log(error);
    }
}
function home(){
    document.getElementById("content").innerHTML="";
    callapi();
}




async function allcountry(){
    document.getElementById("content").innerHTML="";
    console.log("inside all");
    var body = document.getElementById("content");
    var heading1 = createTag("h1");
    heading1.setAttribute("style","padding:20px;text-align:center;");
    heading1.innerText="All Country data";
    var container3 = createTag("div","container");
    var row3 = createTag("div","row");
    var resp = await fetch("https://covid-api.mmediagroup.fr/v1/cases");
    var obj = await resp.json();
    var data1=[];
    for(var key in obj){
        data1.push(obj[key]["All"]);   
    }
    var resp1 = await fetch("https://restcountries.eu/rest/v2/all");
    var restdata1 = await resp1.json(); 

    
    //console.log(data1,restdata1,vaccines);
    for(var i=0;i<data1.length-1;i++){
        if(data1[i]['country']){
        var col3 = createTag("div","col-md-4");
        var allcards = createTag("div","card");
        allcards.setAttribute("style","background-color:rgb(32, 32, 32); border-top:6px solid purple;padding:10px;margin-top:20px;");
        var cardheader = createTag("div","card-header text-center");
        cardheader.innerText = data1[i]["country"];
        var image ="";
        for(var j =0;j<restdata1.length;j++){
            if(data1[i]["abbreviation"] === restdata1[j].alpha2Code){
                image=restdata1[j].flag;
                break;
            }
            else if(data1[i]["country"] === restdata1[j].name){
                image=restdata1[j].flag;
                break;
            }
        }
        var cardimg = createTag("img","card-img-top");
        cardimg.setAttribute("src",image);
        cardimg.setAttribute("height","200px");
        var allcardbody = createTag("div","card-body");
        var ul = createTag("ul","list-group");
        ul.setAttribute("style","background-color:rgb(32, 32, 32);");
        var li1 = createTag("li","list-group-item");
        li1.setAttribute("style","background-color:rgb(32, 32, 32);")
        li1.innerHTML = `<i>Confirmed Cases</i>: ${data1[i]['confirmed']}`;
        var li2 = createTag("li","list-group-item");
        li2.setAttribute("style","background-color:rgb(32, 32, 32);")
        li2.innerHTML = `<i>Recovered</i>: ${data1[i]['recovered']}`;
        var li3 = createTag("li","list-group-item");
        li3.setAttribute("style","background-color:rgb(32, 32, 32);")
        li3.innerHTML = `<i>Deaths</i>: ${data1[i]['deaths']}`;
        var li4 = createTag("li","list-group-item");
        li4.setAttribute("style","background-color:rgb(32, 32, 32);")
        li4.innerHTML = `<i>Population</i>: ${data1[i]['population']}`;
        ul.append(li1,li2,li3,li4);
        allcardbody.append(ul);
        allcards.append(cardheader,cardimg,allcardbody);
        col3.append(allcards);
        row3.append(col3);
        container3.append(row3);

    }
    body.append(heading1,container3);
}
}
