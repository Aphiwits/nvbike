import Api from '@/services/Api'

export default {
    index (search){
        return Api().get('bikes')
    },
    show (bikeId){
        return Api().get('bike/'+bikeId)
    },
    post (bike){
        return Api().post('bike',bike)
    },
    put (bike){
        return Api().put('bike/'+bike.id, bike)
    },
    delete (bike){
        return Api().delete('bike/'+bike.id, bike)
    }
}