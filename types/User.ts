export namespace USER {
	export interface name {
		age : number
	}
	export interface UserInfo {
		id : number
		name : string
		username : string
		email : string
		address : Address
		phone : string
		website : string | null
		company : Company | null
	}
	export interface Address {
		street : string
		suite : string
		city : string
		zipcode : string
		geo : Geo
	}
	export interface Geo {
		lat : string
		lng : string
	}
	export interface Company {
		name : string
		catchPhrase : string
		bs : string
	}
}