"use client";

import React from 'react';
import MyFormLogin from "./../components/MyFormLogin";


export default function login()
{
	return(
		<div className="flex justify-center items-center bg-purple-300 min-h-screen">
			<div className="w-1/2 m-auto p-0 flex justify-center">
				<MyFormLogin></MyFormLogin>
			</div>
		</div>
		);
}