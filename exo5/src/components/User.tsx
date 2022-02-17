import { ReactElement } from 'react';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';

import { api } from '../api';
import ROUTES from '../routes';
import { UserType, ErrorType } from '../types';

function User(): ReactElement {
    const { userId } = useParams();

    const { data, isIdle, isLoading, isError, error } = useQuery<UserType, ErrorType>(
        ['user', userId],
        () => api.get(`https://gorest.co.in/public/v2/users/${userId}`).then((res) => res.data),
    );

    return (
        <>
            <p>
                <Link to={ROUTES.HOMEPAGE}><big>&larr;</big> back to home</Link>
            </p>
            <div className="User">
                {(isIdle || isLoading) && <p>Chargement des données...</p>}
                {isError && <p>{error?.message}</p>}
                {data && (
                    <>
                        <h1>{data.name.toLocaleUpperCase()}</h1>
                        <p>Hi! I'm a <em>{data.gender}</em> awesome developper ;)</p>
                        <p>
                            Feel free to contact me at <a href={`mailto:${data.email}`}>this address</a>
                        </p>
                    </>
                )}
            </div>
        </>
    );
}

export default User;
