import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                          "React: Your Gateway to Modern Web Development"
                      </h2>
                      <p className="mt-6 text-gray-600">
                          React is a powerful and beginner-friendly JavaScript library for building dynamic user interfaces. It makes coding feel fun and creative with reusable components, real-time updates, and strong community support. Learning React opens doors to modern web development and exciting career opportunities. Start small—build big. You've got this! 🚀


                      </p>
                      <p className="mt-4 text-gray-600">
                          dont Watch tutorials, build projects.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}
