import React from "react";
import Image from "../../components/Image";
import { Cross_Icon } from "../../utils/constant";

const Userprofile = ({ userprofile, onClose }) => {
    return (
        <div>
            <div className="d-flex justify-content-between mx-3 border-bottom py-2">
                <div>Profile Detail</div>
                <div>
                    <Image src={Cross_Icon} className="cursor-pointer" width={12} onClick={onClose} />
                </div>
            </div>
            {userprofile ? (
                <div className="row m-0 p-3">
                    <div className="col-12">
                        <div>
                            <span>First Name : </span>
                            <span>{userprofile?.first_name}</span>
                        </div>
                        <div>
                            <span>Last Name : </span>
                            <span>{userprofile?.last_name}</span>
                        </div>
                        <div>
                            <span>Email : </span>
                            <span>{userprofile?.email}</span>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="noDataFound">
                    No data Found
                </div>
            )}
        </div>
    );
};

export default Userprofile;
