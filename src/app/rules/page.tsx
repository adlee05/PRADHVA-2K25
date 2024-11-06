const Page = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-yellow-600 to-orange-600 p-8 text-black">
            <div className="max-w-4xl mx-auto bg-white bg-opacity-10 p-8 rounded-lg shadow-lg">
                <h1 className="text-4xl font-extrabold text-center mb-8 drop-shadow-lg">PRADHVA 2024</h1>
                <h2 className="text-2xl font-semibold mb-4 underline">Rules and Regulations:</h2>

                <section className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">Group Games:</h3>
                    <ul className="list-disc ">
                        <li>The group games include <strong>Cricket</strong>, <strong>Football</strong>, <strong>Volleyball</strong>, <strong>Basketball</strong>, and <strong>Throwball</strong>.</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">Athletics:</h3>
                    <ul className="list-disc ">
                        <li>The athletic events for boys include <strong>100m</strong>, <strong>200m</strong>, <strong>400m</strong>, <strong>800m</strong>, and <strong>1500m</strong> races.</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">Field Events:</h3>
                    <ul className="list-disc ">
                        <li>Events include <strong>Shotput</strong>, <strong>Discus Throw</strong>, <strong>Javelin</strong>, and <strong>Long Jump</strong>.</li>
                        <li>Results are based on the best of three attempts. <strong>Foul attempts</strong> count as chances.</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">Badminton:</h3>
                    <ul className="list-disc ">
                        <li>Matches up to the <strong>quarterfinals</strong>: 1 set of 15 points.</li>
                        <li><strong>Quarterfinals onward</strong>: Best of 3 sets.</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">Indoor Events:</h3>
                    <ul className="list-disc ">
                        <li>Events include <strong>Carroms</strong>, <strong>Chess</strong>, and <strong>Table Tennis</strong>.</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">Relay Races:</h3>
                    <ul className="list-disc ">
                        <li>Relay races include <strong>4x100m</strong> and <strong>4x400m</strong>.</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h3 className="text-2xl font-semibold mb-2">Participation Guidelines:</h3>
                    <ul className="list-disc ">
                        <li>Each student can participate in the following events:
                            <ul className="list-decimal  ml-4">
                                <li><strong>2 group games</strong></li>
                                <li><strong>2 indoor events</strong></li>
                                <li><strong>2 athletics events</strong></li>
                                <li><strong>2 field events</strong></li>
                                <li><strong>1 relay event</strong></li>
                                <li><strong>Badminton</strong> (separate from other events)</li>
                            </ul>
                        </li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">Registration and Attendance:</h3>
                    <ul className="list-disc ">
                        <li><strong>No spot registrations</strong> will be permitted.</li>
                        <li>Participants must arrive on time. Late arrivals (except for event clashes) result in disqualification.</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">Team Formation:</h3>
                    <ul className="list-disc ">
                        <li>Teams must consist of members from the same year/batch.</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">Code of Conduct:</h3>
                    <ul className="list-disc ">
                        <li><strong>Decisions</strong> by referees and the committee are final. Arguing leads to warnings or disqualification.</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">Use of Equipment:</h3>
                    <ul className="list-disc ">
                        <li><strong>Misuse</strong> or tampering with sports equipment results in penalties or disqualification.</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">Health and Safety:</h3>
                    <ul className="list-disc ">
                        <li>The organizing committee is not liable for injuries, though <strong>first aid</strong> will be available.</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">Forfeiture:</h3>
                    <ul className="list-disc ">
                        <li>Teams must notify the committee at least <strong>1 hour before</strong> the event if they are unable to compete.</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">Tiebreakers:</h3>
                    <ul className="list-disc ">
                        <li>In case of a <strong>tie</strong>, event-specific tiebreaker rules apply (e.g., additional set, time extension).</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">NOTE:</h3>
                    <ul className="list-disc ">
                        <li>
                            <strong>Team Allocation by Year:</strong>
                            <ul className="list-disc ml-4">
                                <li>2021: <strong>2 Teams</strong></li>
                                <li>2022: <strong>3 Teams</strong></li>
                                <li>2023: <strong>3 Teams</strong></li>
                                <li>2024: <strong>4 Teams</strong></li>
                            </ul>
                        </li>
                        <li>
                            <strong>Cricket-Specific Rule:</strong>
                            <ul className="list-disc ml-4">
                                <li>Cricket will have <strong>2 Teams per batch</strong>, regardless of the year.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Preliminary Rounds:</strong>
                            <ul className="list-disc ml-4">
                                <li>For cricket: If the number of teams increases by <strong>more than 2</strong>, preliminaries will be held.</li>
                                <li>For other sports: If the number of teams <strong>exceeds the allocation specified for that year</strong> (as listed above), preliminaries will be conducted.</li>
                            </ul>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default Page;
