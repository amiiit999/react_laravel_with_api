<?php

namespace App\Http\Controllers\API;

use auth;
use App\Models\UserInfo;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class UserInfoController extends Controller
{
    public function AddUserInfo(Request $request,$id){
        
        // $validator = Validator::make($request->all(),[
        //     // 'user_id' => 'required',
        //     'image' => 'required',
        //     'document' => 'required',
        //     'doj' => 'required',
        //     'phoneNumber' => 'required',
        //     'about' => 'required',
        //     'gender' => 'required',

        //    ],

        //  );
         return ['data'=> $request->all()];
         //Check the validation
        //  if ($validator->fails())
        //  {        
        //     return response()->json([
        //         'status' => 422,
        //         'message' => $validator->messages(), 
        //     ]);
        //  }

        //  else{
            // $image = $request->image->name;
            // $imageName = $image->getClientOriginalName();
            // $image->move(public_path('images'), $imageName);

                $userInfo = UserInfo::create([
                    'user_id' => $id,
                    'image' => 'tets',
                    'document' => 'rrr',
                    'date_of_joining' => $request->doj,
                    'phone_number' => $request->phoneNumber,
                    'about' => $request->about,
                    'gender' => $request->gender,
                ]);
               $token = $userInfo->createToken($userInfo->about.'_Token')->plainTextToken;

               return response()->json([
                'status' => 200,
                
                'token' => $token,
                'message' => 'User Infomation Added Successfully !!',
            ]);
        //  }
    }
}
