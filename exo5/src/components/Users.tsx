import { ReactElement } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

import { api } from '../api';
import { ErrorType, UserType } from '../types';
import ROUTES from '../routes';

function Users(): ReactElement {
    const { data, isIdle, isLoading, isError, error } = useQuery<UserType[], ErrorType>(
        'users',
        () => api.get('https://gorest.co.in/public/v2/users').then((res) => res.data),
    );

    return (
        <div className="Users">
            {(isIdle || isLoading) && <p>Chargement des données...</p>}
            {isError && <p>{error?.message}</p>}
            {data && (
                <ul>
                    {data?.map?.((user) => (
                        <li key={user.id}>
                            <Link to={`${ROUTES.USER}/${user.id}`} className="userLink">
                                <strong>{user.name.toUpperCase()}</strong>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Users;
