# Decentraland scene, portal for pride 2023

This folder contains all the necessary files to launch a Decentraland scene.

## Try it out

**Install the CLI**

Download and install the Decentraland CLI by running the following command:

```bash
npm i -g decentraland
```
**Install the ECS-UTILS**

Install ecs-scene-utils by running the following command:

```bash
npm install @dcl/ecs-scene-utils -B
```

**Previewing the scene**
Execute the following command in the root of the project.

```bash
dcl start
```

**Config your portal in the scene**
Open src -> portal -> preSetEventData.ts

Here you can config your portal, follow the example that are comented

**Create a new portal**
If you want you can spawn more portals, in game.ts there is an example of how to do it. Remember also to modify the <preSetEventData.ts> configuration file.

