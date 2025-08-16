import { API_BASE } from '@/app/_utils/config';
import AnimatedElement from '../AnimationElement/AnimationElement';
import ProjectCard from '../ProjectCard/ProjectCard';
import './Project.css';

export const dynamic = 'force-dynamic'; // Ensures fresh fetch on every request (alternative to no-store)

async function getProjects() {
    try {
        const res = await fetch(`${API_BASE}/getProjects`, {
            cache: 'no-store', // No caching on server side
        });

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const { data }: { data: Array<ProjectI> } = await res.json();
        return { projects: data || [], error: null };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
        console.error('Error fetching project details:', err);
        return { projects: [], error: err };
    }
}

export default async function Project() {
    const { projects, error } = await getProjects();


    return (
        <section className="project-section" id="projects">
            <AnimatedElement
                className="section-heading"
                initial="hidden"
                animate="visible"
                as="h2"
            >
                Project
                <div className="underline" />
            </AnimatedElement>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
                {error && <p className="text-red-500">Error loading projects</p>}

                {!error && projects.length === 0 && (
                    <p className="text-gray-500">No projects found</p>
                )}

                {projects.map((pDetails, index) => (
                    <ProjectCard
                        key={`${pDetails.title}-${index}`}
                        imageSrc={
                            pDetails.projectImage || '/image_not_available.png'
                        }
                        title={pDetails.title}
                        description={pDetails.description}
                        techUsed={pDetails.techStack}
                        actionButtons={[{
                            title: 'github',
                            url: pDetails.clientRepo || pDetails.serverRepo
                        },
                        {
                            title: 'view project ',
                            url: pDetails.liveLink
                        }
                        ]}
                    />
                ))}
            </div>
        </section>
    );
}

export interface ProjectI {
    _id: string
    title: string
    description: string
    techStack: string[]
    features: unknown[]
    clientRepo: string
    serverRepo: string
    liveLink: string
    projectImage: string
    __v: number
}