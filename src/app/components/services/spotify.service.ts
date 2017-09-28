import { Injectable } from "@angular/core";
import { Http, Headers, Response, URLSearchParams } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()

export class SpotifyService{
	private searchUrl: string;
	private redirect_uri: string;
	private client_id ='17a934e3cc2e4e409c918d1a9011de61';
	private client_secret = '6dcbb0d1c8e94234bca9133bdb83efd4';
	private access_token: string;
	private ArtistUrl: string;
	private AlbumsUrl: string;
	private AlbumUrl: string;
	private encoded = btoa(this.client_id + ':' + this.client_secret);

	constructor (private _http:Http){

	}

	getToken(){
		var mainUrl = 'https://ngspotify-wisperlabs.herokuapp.com/api/access_token';

		return this._http.get(mainUrl)
			.map((res:Response) => res.json());
	}


	searchMusic(str:string, type='artist', token:string){
		// console.log(this.encoded);
		this.searchUrl = 'https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=20&type='+type;
		let headers = new Headers();
		headers.append('Authorization' , 'Bearer ' + token);
		return this._http.get(this.searchUrl, {headers:headers})
			.map((res: Response) => res.json());
	}

	getArtist(id:string, token:string){
		this.ArtistUrl = 'https://api.spotify.com/v1/artists/'+ id;
		let headers = new Headers();
		headers.append('Authorization' , 'Bearer ' + token);
		return this._http.get(this.ArtistUrl , {headers : headers})
			.map((res: Response) => res.json())
	}
    
	getAlbums(artistId:string ,token:string){
		this.AlbumsUrl = 'https://api.spotify.com/v1/artists/'+ artistId + '/albums/?query=&limit=50';
		let headers = new Headers();
		headers.append('Authorization' , 'Bearer ' + token);
		return this._http.get(this.AlbumsUrl , {headers : headers})
			.map((res: Response) => res.json())
	}

	getAlbum(id:string ,token:string){
		this.AlbumUrl = 'https://api.spotify.com/v1/albums/'+id;
		let headers = new Headers();
		headers.append('Authorization' , 'Bearer ' + token);
		return this._http.get(this.AlbumUrl , {headers : headers})
			.map((res: Response) => res.json())
	}


}
