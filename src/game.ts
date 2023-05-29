
import { PortalComponent } from "./portal/components/portalUnityComponent"

// Set up portal

const portal_1 = new Entity()
portal_1.addComponent(new Transform({ position: new Vector3(8, 0, 8) }))
engine.addEntity(portal_1)
portal_1.addComponent(new PortalComponent(portal_1, "Pride Portal"))

// Set up portal 2

// const portal_2 = new Entity()
// portal_2.addComponent(new Transform({ position: new Vector3(24, 0, 8) }))
// engine.addEntity(portal_2)
// portal_2.addComponent(new PortalComponent(portal_2, "Scene Name"))