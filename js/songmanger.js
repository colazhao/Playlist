function songmanger(){
			this.songlist=null;
		}
		songmanger.prototype={
			init:function(songlist){
				this.songlist=songlist;
			},
			addsong:function (songName,songer){
				var obj={
					songName:songName,
					songer:songer
				}
				this.songlist.unshift(obj);
			},
			remove:function (songName,songer){
				var song=this.select(songName,songer);
				var i=this.songlist.indexOf(song);
				this.songlist.splice(i,1);
			},
			updatesong:function (songName,songer){
				var song=this.select(songName,songer);
				song.songName=songName;
				// if(song==null){
				// 	alert(1);
				// }
				song.songer=songer;
				//return song;
			},
			select:function (songName,songer){

				for(var i=0;i<this.songlist.length;i++){
					var song=this.songlist[i];
					if(song.songName==songName){
						return song;
						//console.log(song);
					}
				}
				return null;
				// this.songlist.reduce(function(e){

				// 	if(e.songName==songName||e.songer==songer){
						
				// 		console.log(e);
				// 	}else{
				// 		console.log(1);
				// 		//return null;
				// 	}
				// });
				
			}
		}

		
		