'use client';
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from 'next/navigation';
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from 'zod';

const passwordSchema = z
  .object({
    currentPassword: z.string().min(6, "Current password must be at least 6 characters long"),
    newPassword: z.string().min(6, "New password must be at least 6 characters long"),
    confirmPassword: z.string().min(6, "Confirm password must be at least 6 characters long")
      // .equalTo(z.ref("newPassword"), "Passwords must match"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type passwordSchemaType = z.infer<typeof passwordSchema>;

const ChangePasswordForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<passwordSchemaType>({
    resolver: zodResolver(passwordSchema),
  });
  const [submitting, setSubmitting] = useState(false);

  const router = useRouter();

  const onSubmit = async (data: any) => {
    setSubmitting(true);
    // Send data to your backend for password change (replace with your logic)
    
    try {
      const response = await fetch("/api/change-password", {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to change password");
      }

      reset();
      router.push('/users');
      console.log("Password changed successfully!");
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className='flex justify-center'>
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="currentPassword">Current Password</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              id="currentPassword"
              {...register("currentPassword")}
            />
            
            { errors.currentPassword && <p className="text-red-500 text-xs italic">{errors.currentPassword?.message}</p> }
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="newPassword">New Password</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              id="newPassword"
              {...register("newPassword")}
            />
            { errors.newPassword && (
              <p className="text-red-500 text-xs italic">
                { errors.newPassword.message }
              </p>
            )}
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">Confirm New Password</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              id="confirmPassword"
              {...register("confirmPassword")}
            />
          
            {errors.confirmPassword && <p className="text-red-500 text-xs italic">{errors.confirmPassword.message}</p>}
          </div>
          
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            {submitting ? "Changing password..." : "Change Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePasswordForm;