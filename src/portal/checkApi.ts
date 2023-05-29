
//with limit 'https://events.decentraland.org/api/events/?limit=10'
//without limit 'https://events.decentraland.org/api/events/'

import { Company_Event_01 } from "./preSetEventData"
/**
 *  Gets the events from the api
 * @param url 
 * @returns 
 */
export async function getEvents(url: string) {
  let events: any[] = []

  try {
    const response = await fetch(url)
    const json = await response.json()


    for (const event of json.data) {
      events.push(event)

    }
    //! test if events is empty
    if (!events[0]) {
      events = []
      events.push(Company_Event_01)
      return events
    }

    return events
  } catch (e) {
    log('error getting event data ', e)
    events = []
    events.push(Company_Event_01)

  }
}




