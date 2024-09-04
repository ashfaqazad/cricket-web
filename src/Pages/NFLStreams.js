import React from 'react'

export default function NFLStreams () {
  return (
    <>
    
    <div className="m-2">
  <div className="flex flex-wrap">
    {/* Combined Column */}
    <h1 className='text-3xl text-green-600 mt-5 mb-24 px-4'><strong>MLS Streams - MLS Soccer Streams</strong></h1>
    <div className="w-full md:w-2/3 md:h-screen">
      {/* Content for combined column */}

      <div className="flex flex-wrap justify-between mb-4 p-4">
        {/* Content for column 1 */}



        <a href="https://www1.ihdstreams.xyz/NBA-Stream" class="block w-full rounded overflow-hidden shadow-md hover:shadow-lg mb-6 bg-white">
                    <div class="px-4 py-5 flex flex-row items-center">
                        <img class="w-12 md:w-16" alt="Crackstreams NBA" src="https://www1.ihdstreams.xyz/images/nba.png" />
                        <div class="pl-4 w-full text-center">
                            <h3 class=" text-sm sm:text-xl mb-2">NBA Streams</h3>
                            <p class="text-gray-700 text-xs sm:text-sm">
                            </p><h4>Click Here To Watch More Games</h4>
                            <p></p>
                        </div>
                    </div>
                </a>
              <br />






      </div>
    </div>



    {/* Sidebar */}
    <div className="w-full md:w-1/3 md:sticky md:top-0 -inset-0 py-4 px-4">
      {/* Sidebar content */}
      <div className="bg-white p-4 shadow rounded md:ml-auto">

<h1 className='text-2xl mb-4'>Welcome to Crackstreams</h1>
<p>Links are updated ONE day BEFORE the event. We offer <strong>MLS streams, </strong> Major League Soccer, MLS stream Today, <span class="underline cursor-pointer text-red-500">UFC Streams</span> and Boxing streams. <span class="underline cursor-pointer text-red-500"> Sportsurge </span><br />
<br />
<br />

<span>Crackstreams MLS</span>
</p>
<br />

<span class="underline cursor-pointer text-red-500">NFL STREAMS</span>


      </div>
    </div>
  </div>
</div>


    
    
    </>
  )
}

