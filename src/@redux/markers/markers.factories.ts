import { Timestamp } from 'firebase/firestore';

import { Uuid } from '@typings/common';
import { Marker, MarkerDTO } from '@typings/markers';
import { SharedUser, SharedUserDTO } from '@typings/shared';
import { USER_PERMISSIONS } from '@typings/users';

function markerFactoryFromDTO(markerUuid: Uuid, markerDTO: MarkerDTO): Marker {
    const { createAt, sharedFor, ...rest } = markerDTO;
    const marker: Marker = {
        ...rest,
        uuid: markerUuid,
        createAt: createAt.toMillis(),
        sharedFor: sharedFor.map(
            (user: SharedUserDTO): SharedUser => ({
                uuid: user.uuid,
                permission: user.permission as USER_PERMISSIONS,
            })
        ),
    };

    return marker;
}

function markerFactoryToDTO(marker: Marker): MarkerDTO {
    const { uuid, createAt, ...rest } = marker;
    const markerDTO: MarkerDTO = {
        ...rest,
        createAt: Timestamp.fromMillis(createAt),
    };

    return markerDTO;
}

export { markerFactoryFromDTO, markerFactoryToDTO };
