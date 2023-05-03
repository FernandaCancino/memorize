import { Constants } from "../utils/Constants"

export const searchCards = async({ cardNumber }) => {
    try {
        const response = await fetch(`${Constants.API_CARDS}${cardNumber}`)
        const json = await response.json()
        const cards = json.entries
        return cards?.map( card => ({
            id: card.fields.image.uuid,
            url: card.fields.image.url,
            title: card.fields.image.title
        }))        
    } catch (error) {
        throw new Error('Error searching cards')
    }
}