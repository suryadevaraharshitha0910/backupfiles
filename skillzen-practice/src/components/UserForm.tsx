import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import Input from "./ui/Input";
import { userSchema } from "./validation/userSchema";
import Toggle from "./ui/toggle";
import type { UserFormData } from "../pages/CreateUser";
import { useHasPermission } from "./hooks/useHasPermission";

interface UserFormProps {
  initialValues?: UserFormData;
  onSubmit: (data: UserFormData) => void;
  onCancel: () => void;
  canAddUser: boolean;
}

export default function UserForm({
  initialValues,
  onSubmit,
  onCancel,
}: UserFormProps) {
  const {
    register,
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors },
  } = useForm<UserFormData>({
    resolver: yupResolver(userSchema),
    defaultValues: {
      id: 0,
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      role: "",
      active: true,
    },
  });

  const canCreateUser = useHasPermission(["user_write"]);

  const handleFormSubmit = (data: UserFormData) => {
    onSubmit({
      ...data,
      id: initialValues?.id ?? Date.now(),
    });

    toast.success(
      initialValues
        ? "User updated successfully!"
        : "User created successfully!"
    );

    if (!initialValues) {
      reset({
        id: 0,
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        role: "",
        active: true,
      });
    }
  };

  useEffect(() => {
    if (initialValues) {
      reset(initialValues);
    } else {
      reset({
        id: 0,
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        role: "",
        active: true,
      });
    }
  }, [initialValues, reset]);

  const isActive = watch("active");

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="mx-auto w-full max-w-3xl rounded-2xl border border-gray-200 bg-white p-8 shadow-xl"
    >
      <div className="mb-8 border-b border-gray-200 pb-6">
        <h1 className="text-3xl font-bold text-gray-900">
          {initialValues ? "Update User" : "User Details"}
        </h1>

        <p className="mt-2 text-gray-500">
          Fill in the details below to create a new user.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Input
          label="First Name *"
          placeholder="Enter first name"
          registration={register("firstName")}
          error={errors.firstName}
        />

        <Input
          label="Last Name *"
          placeholder="Enter last name"
          registration={register("lastName")}
          error={errors.lastName}
        />

        <Input
          label="Email *"
          type="email"
          placeholder="Enter email"
          registration={register("email")}
          error={errors.email}
        />

        <Input
          label="Phone *"
          placeholder="Enter phone number"
          registration={register("phone")}
          error={errors.phone}
        />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-1">
          <label className="text-lg font-medium text-gray-700">
            Role
          </label>

          <select
            {...register("role")}
            className="rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Role</option>
            <option value="Admin">Admin</option>
            <option value="Instructor">Manager</option>
            <option value="Student">Student</option>
          </select>

          {errors.role && (
            <p className="text-sm text-red-500">
              {errors.role.message}
            </p>
          )}
        </div>

        <div className="flex items-center justify-between rounded-xl p-4">
          <div>
            <p className="font-semibold text-gray-800">
              Active User
            </p>

            <p className="text-sm text-gray-500">
              {isActive ? "User is Active" : "User is Inactive"}
            </p>
          </div>

          <Controller
            name="active"
            control={control}
            render={({ field }) => (
              <Toggle
                checked={field.value}
                onChange={() => field.onChange(!field.value)}
              />
            )}
          />
        </div>
      </div>

      <div className="mt-8 flex justify-center gap-4">
        <button
          type="button"
          onClick={() => {
            reset({
              id: 0,
              firstName: "",
              lastName: "",
              email: "",
              phone: "",
              role: "",
              active: true,
            });

            onCancel();
          }}
          className="w-40 rounded-xl border border-gray-300 bg-white py-3 text-base font-semibold text-gray-700 transition hover:bg-gray-100"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={!canCreateUser}
          title={
            !canCreateUser
              ? "You don't have permission to add users."
              : ""
          }
          className={`w-40 rounded-xl py-3 text-base font-semibold text-white transition ${
            canCreateUser
              ? "bg-blue-600 hover:bg-blue-700"
              : "cursor-not-allowed bg-gray-400 opacity-50"
          }`}
        >
          {initialValues ? "Update User" : "Create User"}
        </button>

        
      </div>
    </form>
  );
}