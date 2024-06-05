/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ZMNr4XhQjih
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-6 md:p-8">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">My Travel Schedule</h1>
        <Button variant="outline" size="sm">
          <PlusIcon className="w-4 h-4 mr-2" />
          Add Trip
        </Button>
      </header>
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Tropical Getaway</CardTitle>
            <CardDescription>Relaxing vacation in Bali, Indonesia</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium">Departure</p>
                <p className="text-gray-500 dark:text-gray-400">June 15, 2024</p>
              </div>
              <div>
                <p className="text-sm font-medium">Return</p>
                <p className="text-gray-500 dark:text-gray-400">June 22, 2024</p>
              </div>
              <div>
                <p className="text-sm font-medium">Duration</p>
                <p className="text-gray-500 dark:text-gray-400">7 nights</p>
              </div>
              <div>
                <p className="text-sm font-medium">Accommodation</p>
                <p className="text-gray-500 dark:text-gray-400">Luxury Villa</p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <PlaneIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              <span className="text-gray-500 dark:text-gray-400">Bali, Indonesia</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              <span className="text-gray-500 dark:text-gray-400">June 15 - June 22, 2024</span>
            </div>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>City Exploration</CardTitle>
            <CardDescription>Sightseeing trip to London, UK</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium">Departure</p>
                <p className="text-gray-500 dark:text-gray-400">September 1, 2024</p>
              </div>
              <div>
                <p className="text-sm font-medium">Return</p>
                <p className="text-gray-500 dark:text-gray-400">September 8, 2024</p>
              </div>
              <div>
                <p className="text-sm font-medium">Duration</p>
                <p className="text-gray-500 dark:text-gray-400">7 nights</p>
              </div>
              <div>
                <p className="text-sm font-medium">Accommodation</p>
                <p className="text-gray-500 dark:text-gray-400">Boutique Hotel</p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex items-center justify-between">
            <div className="flex items-center gap-2" />
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function PlaneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    </svg>
  )
}


function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}
