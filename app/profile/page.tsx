"use client";

import { useContext, useState } from "react";

import axios from "axios";

import { toast } from "sonner";

import DashboardLayout from "@/app/components/dashboard/DashboardLayout";

import ProtectedRoute from "@/app/components/ProtectedRoute";

import { AuthContext } from "@/context/AuthContext";

export default function ProfilePage() {

  const auth = useContext(AuthContext);

  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState({

      skills:
        auth?.user?.skills || "",

      experience_years:
        auth?.user?.experience_years || "",

      bio:
        auth?.user?.bio || "",

      current_position:
        auth?.user?.current_position ||
        "",
    });

  const handleChange = (
    e:
      React.ChangeEvent<
        HTMLInputElement |
        HTMLTextAreaElement
      >
  ) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    try {

      setLoading(true);

      const token =
        localStorage.getItem(
          "token"
        );

      await axios.patch(

        `${process.env.NEXT_PUBLIC_API_URL}/auth/update-profile/`,

        formData,

        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

      toast.success(
        "Profile updated",
        {
          description:
            "Your profile was updated successfully.",
        }
      );

    } catch (error) {

      console.log(error);

      toast.error(
        "Update failed",
        {
          description:
            "Something went wrong.",
        }
      );

    } finally {

      setLoading(false);
    }
  };

  if (loading) {
      return (
        <ProtectedRoute>
          <DashboardLayout>
            <p
              className="
                text-lg
                font-medium
              "
            >
              Loading dashboard...
            </p>
          </DashboardLayout>
        </ProtectedRoute>
      );
    }

  return (
    <ProtectedRoute>

      <DashboardLayout>

        <div
          className="
            max-w-4xl
            mx-auto
          "
        >
          {/* HEADER */}

          <div className="mb-8">

            <h1
              className="
                text-4xl
                font-bold
                text-black
              "
            >
              My Profile
            </h1>

            <p
              className="
                text-gray-500
                mt-2
              "
            >
              Update your professional
              information and skills.
            </p>

          </div>

          {/* CARD */}

          <div
            className="
              bg-white
              rounded-3xl
              border
              shadow-sm
              p-8
            "
          >
            <form
              onSubmit={
                handleSubmit
              }
              className="
                space-y-7
              "
            >

              {/* POSITION */}

              <div>

                <label
                  className="
                    block
                    mb-2
                    font-semibold
                  "
                >
                  Current Position
                </label>

                <input
                  type="text"
                  name="current_position"
                  value={
                    formData.current_position
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="Frontend Developer"
                  className="
                    w-full
                    border
                    rounded-2xl
                    px-4
                    py-3
                    outline-none
                    focus:ring-2
                    focus:ring-purple-500
                  "
                />

              </div>

              {/* EXPERIENCE */}

              <div>

                <label
                  className="
                    block
                    mb-2
                    font-semibold
                  "
                >
                  Experience (Years)
                </label>

                <input
                  type="number"
                  name="experience_years"
                  value={
                    formData.experience_years
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="2"
                  className="
                    w-full
                    border
                    rounded-2xl
                    px-4
                    py-3
                    outline-none
                    focus:ring-2
                    focus:ring-purple-500
                  "
                />

              </div>

              {/* SKILLS */}

              <div>

                <label
                  className="
                    block
                    mb-2
                    font-semibold
                  "
                >
                  Skills
                </label>

                <textarea
                  name="skills"
                  value={
                    formData.skills
                  }
                  onChange={
                    handleChange
                  }
                  rows={4}
                  placeholder="React, Django, PostgreSQL..."
                  className="
                    w-full
                    border
                    rounded-2xl
                    px-4
                    py-3
                    outline-none
                    resize-none
                    focus:ring-2
                    focus:ring-purple-500
                  "
                />

              </div>

              {/* BIO */}

              <div>

                <label
                  className="
                    block
                    mb-2
                    font-semibold
                  "
                >
                  Bio
                </label>

                <textarea
                  name="bio"
                  value={
                    formData.bio
                  }
                  onChange={
                    handleChange
                  }
                  rows={5}
                  placeholder="Tell us about yourself..."
                  className="
                    w-full
                    border
                    rounded-2xl
                    px-4
                    py-3
                    outline-none
                    resize-none
                    focus:ring-2
                    focus:ring-purple-500
                  "
                />

              </div>

              {/* BUTTON */}

              <button
                type="submit"
                disabled={loading}
                className="
                  w-full
                  bg-black
                  text-white
                  py-4
                  rounded-2xl
                  font-semibold
                  hover:bg-gray-900
                  transition-all
                  disabled:opacity-50
                "
              >
                {loading
                  ? "Updating..."
                  : "Update Profile"}
              </button>

            </form>
          </div>
        </div>

      </DashboardLayout>

    </ProtectedRoute>
  );
}