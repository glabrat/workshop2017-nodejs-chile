import {database, docTypes} from '../../database';


export class BandModelClass {
    getList () {
        return database.find({docType: docTypes.BAND})
    }
    getArtists (id) {
        return database.find({docType: docTypes.ARTIST, _id: ""})
    }
}


export const bandModel = new BandModelClass();
