import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Modal from '../../components/model/model';
import Image from '../../components/Image';
// import { deletePersonDetail, getAllDetail, getPersonDetail } from '../../services';
import { useDispatch, useSelector } from 'react-redux';
import {
    deleteUser,
    selectUsers
} from './userSlice';
import Userprofile from './userprofile';
import EditUser from './editUser';
import { Add_icon, Edit_icon, Reject_icon, View_icon } from '../../utils/constant';

const Dashboard = () => {
    const dispatch = useDispatch();
    const userData = useSelector(selectUsers);
    const [userprofile, setUserprofile] = useState("");
    const [profileDialog, setProfileDialog] = useState(false);
    const [profileAdd, setProfileAdd] = useState(false);
    const [editUserDetails, setEditUserDetails] = useState();

    const deleteUserData = (id) => {
        dispatch(deleteUser({userId:id})); 
    }

    return (
        <>
            <div>
                <div className='d-flex justify-content-between p-4 align-items-center headerSection mb-3'>
                    <Link className='addProductBtn p-2' to="/">
                        Back
                    </Link>
                    <h5>Person Details</h5>
                    <div className='d-flex'>
                        <div className='d-flex px-2 mx-3 addProductBtn align-items-center' onClick={() => setProfileAdd(!profileAdd)}>
                            <div className='p-2'>
                            <img
                                className="cursor"
                                src={Add_icon}
                                width={25}
                            />
                            </div>
                            <div>Add New Person</div>
                        </div>
                    </div>
                </div>
                <table className="personDetailBoard table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#Id</th>
                            <th scope="col">First name</th>
                            <th scope="col">Last name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    {userData?.length > 0 ? userData?.map((data, index) => (
                        <tbody key={`Person_${index}`}>
                            <tr>
                                <td scope="row">{index + 1}</td>
                                <td>{data.first_name}</td>
                                <td>{data.last_name}</td>
                                <td>{data.email}</td>
                                <td>
                                    <div className="col-auto d-flex p-0 font-11 text-capitalize justify-content-center">
                                        <div className="col-auto px-2">
                                            <Image
                                                className="action_img cursor"
                                                src={Reject_icon}
                                                alt={data.id}
                                                onClick={() => deleteUserData(data.id)}
                                            />
                                        </div>
                                        <div className="col-auto px-2">
                                            <Image
                                                className="action_img cursor"
                                                src={Edit_icon}
                                                onClick={() => {
                                                    setProfileAdd(!profileAdd);
                                                    setEditUserDetails(data)
                                                }}
                                            />
                                        </div>
                                        <div className="col-auto px-2">
                                            <Image
                                                className="action_img cursor"
                                                src={View_icon}
                                                onClick={() => {
                                                    setProfileDialog(!profileDialog);
                                                    setUserprofile(data)
                                                }}
                                            />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    )) : (
                        <th colSpan={5} className='text-center p-5 w-100'>No Data Found</th>
                    )}
                </table>
            </div>

            {/* view user details Model */}
            <Modal open={profileDialog} onClose={() => setProfileDialog(!profileDialog)}>
                <Userprofile
                    userprofile={userprofile}
                    onClose={() => setProfileDialog(!profileDialog)}
                />
            </Modal>

            {/* Edit user details Model */}
            <Modal open={profileAdd} onClose={() => {
                setProfileAdd(!profileAdd);
                setEditUserDetails(false);
            }}>
                <EditUser
                    onClose={() => {
                        setProfileAdd(!profileAdd);
                        setEditUserDetails(false);
                    }}
                    editUserDetails={editUserDetails}
                />
            </Modal>
        </>
    )
}

export default Dashboard