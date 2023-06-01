/**
 StationManifest.ts
 sveltekit-tailwind-starter-template
 
 Created by Ian Thompson on May 28th 2023
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2023 Nice Lion Technologies LLC. All Rights Reserved.
 
*/

import type { Station } from "../types/Stations";

export const Stations: [Station] = [
    {
        name: "Pickens County Sheriff, Pickens County EMS, Easley Police, Easley Fire, DNR",
        id: 33549,
        location: "Pickens, SC"
    }, 
    {
        name: "FDNY - Bronx, Brooklyn, Manhattan, Queens and Staten Island",
        id: 9358,
        location: "New York City, New York"
    }, 
    {
        name: "Anderson County Public Safety",
        id: 38164,
        location: "Anderson, SC"
    }, 
    {
        name: "Indianapolis Metropolitan Police",
        id: 32602,
        location: "Indianapolis, Indiana"
    },
    {
        name: "Myrtle Beach Fire Rescue",
        id: 25648,
        location: "Myrtle Beach, SC"
    },
    {
        name: "York County Sheriff Dispatch",
        id: 25969,
        location: "York, SC"
    }, 
    {
        name: "Spartanburg City Police and County Sheriff",
        id: 30597,
        location: "Spartanburg, SC"
    }

]