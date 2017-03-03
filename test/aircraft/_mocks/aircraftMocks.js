export const AIRCRAFT_DEFINITION_MOCK = {
    name: 'Boeing 737-700',
    icao: 'B737',
    engines: {
        number: 2,
        type: 'J'
    },
    weightclass: 'L',
    category: {
        srs: 3,
        lahso: 8,
        recat: 'D'
    },
    ceiling: 41000,
    rate: {
        climb: 3000,
        descent: 3000,
        accelerate: 7,
        decelerate: 3
    },
    runway: {
        takeoff: 2.042,
        landing: 1.372
    },
    speed: {
        min: 110,
        landing: 125,
        cruise: 460,
        cruiseM: null,
        max:  525,
        maxM: null
    },
    capability: {
        ils: true,
        fix: true
    }
};

export const AIRCRAFT_DEFINITION_LIST_MOCK = [
    AIRCRAFT_DEFINITION_MOCK,
    {
        name: 'Airbus A320',
        icao: 'A320',
        engines: {
            number: 2,
            type: 'J'
        },
        weightclass: 'L',
        category: {
            srs: 3,
            lahso: 7,
            recat: 'D'
        },
        ceiling: 39000,
        rate: {
            climb: 3500,
            descent: 3000,
            accelerate: 7,
            decelerate: 4
        },
        runway: {
            takeoff: 1.900,
            landing: 1.400
        },
        speed:{
            min: 115,
            landing: 130,
            cruise: 454,
            cruiseM: null,
            max: 487,
            maxM: 0.83
        },
        capability: {
            ils: true,
            fix: true
        }
    }
];

export const DEPARTURE_AIRCRAFT_INIT_PROPS_MOCK = {
    callsign: '432',
    destination: 'KLAS',
    fleet: 'default',
    airline: 'aal',
    airlineCallsign: 'speedbird',
    altitude: 28000,
    speed: 320,
    category: 'departure',
    icao: 'b737',
    model: AIRCRAFT_DEFINITION_MOCK,
    route: 'KLAS.COWBY6.GUP',
    waypoints: []
};

export const ARRIVAL_AIRCRAFT_INIT_PROPS_MOCK = {
    callsign: '432',
    destination: 'KLAS',
    fleet: 'default',
    airline: 'aal',
    airlineCallsign: 'speedbird',
    altitude: 28000,
    speed: 320,
    category: 'arrival',
    icao: 'b737',
    model: AIRCRAFT_DEFINITION_MOCK,
    route: 'DAG.KEPEC3.KLAS',
    waypoints: []
};

export const HOLD_WAYPOINT_MOCK = {
    turnDirection: 'left',
    legLength: '3min',
    name: '@COWBY',
    position: [113.4636606631233, 6.12969620221002],
    altitudeRestriction: -1,
    speedRestriction: -1
};

export const HOLD_POSITION_MOCK = {
    turnDirection: 'left',
    legLength: '3min',
    name: 'GPS',
    position: [113.4636606631233, 6.12969620221002],
    altitudeRestriction: -1,
    speedRestriction: -1
};
