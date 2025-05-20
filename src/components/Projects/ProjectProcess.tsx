"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {Lightbulb, FileSearch, CheckCircle, ChevronRight, Plus, Zap, Target, CheckCircle2} from "lucide-react"
import { cn } from "@/lib/utils"

interface ProcessPhase {
    id: number
    title: string
    description: string
    icon: React.ReactNode
    color: string
    benefits: string[]
    keyPoints: string[]
}

const processPhases: ProcessPhase[] = [
    {
        id: 1,
        title: "Initiation",
        description: "Define project goals and identify key stakeholders",
        icon: <Lightbulb className="h-6 w-6" />,
        color: "from-orange-400 to-red-500",
        benefits: [
            "Clear project vision and scope",
            "Stakeholder identification and alignment",
            "Initial risk assessment",
            "Project charter development",
        ],
        keyPoints: ["Business case analysis", "Feasibility study", "Stakeholder mapping", "Project charter creation"],
    },
    {
        id: 2,
        title: "Planning",
        description: "Develop detailed project plans and resource allocation",
        icon: <Target className="h-6 w-6" />,
        color: "from-amber-400 to-yellow-500",
        benefits: [
            "Comprehensive project roadmap",
            "Clear resource allocation",
            "Risk mitigation strategies",
            "Defined success criteria",
        ],
        keyPoints: ["Work breakdown structure", "Schedule development", "Budget planning", "Risk management plan"],
    },
    {
        id: 3,
        title: "Execution",
        description: "Implement project plans and develop deliverables",
        icon: <Zap className="h-6 w-6" />,
        color: "from-green-400 to-emerald-500",
        benefits: [
            "Efficient task execution",
            "Quality deliverables",
            "Effective team coordination",
            "Transparent progress tracking",
        ],
        keyPoints: ["Team coordination", "Quality assurance", "Progress reporting", "Change management"],
    },
    {
        id: 4,
        title: "Monitoring",
        description: "Track progress and ensure project stays on course",
        icon: <FileSearch className="h-6 w-6" />,
        color: "from-blue-400 to-cyan-500",
        benefits: [
            "Real-time performance tracking",
            "Early issue identification",
            "Data-driven decision making",
            "Continuous improvement",
        ],
        keyPoints: ["Performance measurement", "Status reporting", "Issue management", "Corrective actions"],
    },
    {
        id: 5,
        title: "Closing",
        description: "Finalize deliverables and transition to operations",
        icon: <CheckCircle className="h-6 w-6" />,
        color: "from-purple-400 to-violet-500",
        benefits: [
            "Formal project completion",
            "Knowledge transfer",
            "Lessons learned documentation",
            "Stakeholder sign-off",
        ],
        keyPoints: ["Final deliverable handover", "Documentation completion", "Team recognition", "Project review"],
    },
]

export default function ProjectProcessAlt() {
    const [activePhase, setActivePhase] = useState<number | null>(null)

    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
            <div className="container px-4 mx-auto">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold mb-4"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Our Project Management Approach
                    </motion.h2>
                    <motion.p
                        className="text-lg text-muted-foreground mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        We follow a structured methodology to ensure successful project delivery and exceptional results.
                    </motion.p>


                </div>

                <AnimatePresence mode="wait">

                        <motion.div
                            key="flow"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.5 }}
                        >
                            <FlowView processPhases={processPhases} activePhase={activePhase} setActivePhase={setActivePhase} />
                        </motion.div>


                </AnimatePresence>

                {/* Phase Details */}
                <AnimatePresence>
                    {activePhase !== null && (
                        <motion.div
                            className="mt-16 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 max-w-4xl mx-auto border border-gray-100 dark:border-gray-700"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 40 }}
                            transition={{ duration: 0.4 }}
                        >
                            {processPhases
                                .filter((phase) => phase.id === activePhase)
                                .map((phase) => (
                                    <div key={phase.id}>
                                        <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
                                            <div className={`p-4 rounded-xl bg-gradient-to-br ${phase.color} shadow-lg`}>
                                                <div className="text-white">{phase.icon}</div>
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold">{phase.title} Phase</h3>
                                                <p className="text-muted-foreground text-lg">{phase.description}</p>
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-8 mt-8">
                                            <div className="bg-muted/50 rounded-lg p-6">
                                                <h4 className="font-semibold text-lg mb-4 flex items-center">
                                                    <Zap className="h-5 w-5 text-primary mr-2" />
                                                    Key Benefits
                                                </h4>
                                                <ul className="space-y-3">
                                                    {phase.benefits.map((benefit, index) => (
                                                        <li key={index} className="flex items-start">
                                                            <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                                                                <Plus className="h-3 w-3 text-primary" />
                                                            </div>
                                                            <span>{benefit}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="bg-muted/50 rounded-lg p-6">
                                                <h4 className="font-semibold text-lg mb-4 flex items-center">
                                                    <Target className="h-5 w-5 text-primary mr-2" />
                                                    Key Activities
                                                </h4>
                                                <ul className="space-y-3">
                                                    {phase.keyPoints.map((point, index) => (
                                                        <li key={index} className="flex items-start">
                                                            <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                                                                <ChevronRight className="h-3 w-3 text-primary" />
                                                            </div>
                                                            <span>{point}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            {/* Why Our Process Works */}
            <section className="py-20">
                <div className="container px-4 mx-auto">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Why Our Process Works</h2>
                        <p className="text-lg text-muted-foreground">
                            Our methodology has been refined through years of experience and hundreds of successful projects.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Client-Centered Approach",
                                description:
                                    "We put your needs at the center of everything we do, ensuring the solution meets your specific requirements.",
                            },
                            {
                                title: "Transparent Communication",
                                description:
                                    "Regular updates and clear communication keep you informed throughout the entire project lifecycle.",
                            },
                            {
                                title: "Agile Methodology",
                                description:
                                    "Our flexible approach allows us to adapt to changing requirements and deliver value incrementally.",
                            },
                            {
                                title: "Quality Assurance",
                                description: "Rigorous testing and quality control measures ensure a flawless final product.",
                            },
                            {
                                title: "Continuous Improvement",
                                description:
                                    "We constantly refine our processes based on feedback and lessons learned from each project.",
                            },
                            {
                                title: "Long-term Partnership",
                                description: "We focus on building lasting relationships, providing ongoing support and enhancements.",
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="bg-card rounded-lg p-6 shadow-sm"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true, margin: "-100px" }}
                            >
                                <h3 className="text-xl font-bold mb-2 flex items-center">
                                    <CheckCircle2 className="w-5 h-5 text-primary mr-2" />
                                    {item.title}
                                </h3>
                                <p className="text-muted-foreground">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </section>
    )
}

interface ViewProps {
    processPhases: ProcessPhase[]
    activePhase: number | null
    setActivePhase: (id: number | null) => void
}


function FlowView({ processPhases, activePhase, setActivePhase }: ViewProps) {
    return (
        <div className="relative">
            {/* Desktop view - horizontal flow */}
            <div className="hidden md:flex justify-between items-center mb-12 relative">
                {/* Connecting arrow line */}
                <div className="absolute h-1 bg-gray-200 dark:bg-gray-700 left-[10%] right-[10%] top-1/2 transform -translate-y-1/2 z-0"></div>

                {processPhases.map((phase, index) => (
                    <div key={phase.id} className="z-10 flex flex-col items-center relative">
                        {/* Arrow head for all but the first item */}
                        {index > 0 && (
                            <div className="absolute left-[-30px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-r-[16px] border-r-gray-200 dark:border-r-gray-700"></div>
                        )}

                        <motion.div
                            className={cn(
                                "w-24 h-24 rounded-lg flex flex-col items-center justify-center cursor-pointer shadow-md mb-3 relative",
                                `bg-gradient-to-br ${phase.color}`,
                                activePhase === phase.id ? "ring-4 ring-primary ring-offset-2" : "",
                            )}
                            whileHover={{ scale: 1.05, y: -5 }}
                            onClick={() => setActivePhase(activePhase === phase.id ? null : phase.id)}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="text-white mb-1">{phase.icon}</div>
                            <div className="text-white text-sm font-medium text-center">{phase.title}</div>

                            {/* Phase number */}
                            <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white shadow-sm flex items-center justify-center z-20 text-xs font-bold">
                                {phase.id}
                            </div>
                        </motion.div>

                        <div className="text-center max-w-[150px]">
                            <div className="text-xs text-muted-foreground">{phase.description}</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Mobile view - vertical flow */}
            <div className="md:hidden relative">
                <div className="absolute w-1 bg-gray-200 dark:bg-gray-700 left-6 top-6 bottom-6 z-0"></div>

                <div className="space-y-8 relative">
                    {processPhases.map((phase, index) => (
                        <motion.div
                            key={phase.id}
                            className="flex relative z-10"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <motion.div
                                className={cn(
                                    "w-12 h-12 rounded-full flex items-center justify-center cursor-pointer shadow-md",
                                    `bg-gradient-to-br ${phase.color}`,
                                    activePhase === phase.id ? "ring-4 ring-primary ring-offset-2" : "",
                                )}
                                whileHover={{ scale: 1.1 }}
                                onClick={() => setActivePhase(activePhase === phase.id ? null : phase.id)}
                            >
                                <div className="text-white">{phase.icon}</div>
                            </motion.div>

                            <div className="ml-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 flex-1">
                                <div className="font-medium flex items-center">
                                    <span className="mr-2">{phase.title}</span>
                                    <div className="w-5 h-5 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-xs font-bold">
                                        {phase.id}
                                    </div>
                                </div>
                                <div className="text-sm text-muted-foreground">{phase.description}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}


