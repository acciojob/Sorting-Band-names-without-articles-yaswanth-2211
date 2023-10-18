let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
let news=[];
let map={};
for(i=0;i<touristSpots.length;i++){
	let str=touristSpots[i].
	str=str.replace(/\bthe\b|\ba\b|\ban\b/gi," ");
	str=str.replace(/ +/gi, " ");
	str=str.trim();
	map[str]=touristSpots[i];
	news.push(str);}

news.sort();
for(i=0;i<touristSpots.length;i++){
	news[i]=map[news[i]];
}
document.getElementByID('band').innerHTML=news;