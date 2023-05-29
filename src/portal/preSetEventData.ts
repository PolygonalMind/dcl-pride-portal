
export type EventPanelData = {
    id?: string
    image: string
    coordinates: Vector2
    scene_name: string
}

/** Example of an event data
 * PolygonalMind event data 
 ******************************** CHAGE THIS TO THE EVENT DATA PROVIDED ********************************
 */
const Company_Event_01: EventPanelData = {
    "id": "2a528f7c-04d1-4a63-a85c-6655d7e19dc6", //
    "image": "src/portal/image/banner_portals.jpg",
    "scene_name": "Pride Portal",
    "coordinates": new Vector2(8, 8)
}

// const Company_Event_02: EventPanelData = {
//     "id": "2a528f7c-04d1-4a63-a85c-6655d7e19dc6", //
//     "image": "src/portal/image/banner_portals.jpg",
//     "scene_name": "Scene Name",
//     "coordinates": new Vector2(16, 16)
// }



export const Companies_Events: EventPanelData[] = [
    Company_Event_01,
    //Company_Event_02
]