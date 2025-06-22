'use client';

import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import React from 'react';

interface featureProps {
  title: string;
  description: string;
  icon: string;
}

const features: featureProps[] = [
  {
    title: 'Comprehensive Courses',
    description:
      'Access a wide range of carefully curated courses designed by industry expers',
    icon: '📚',
  },
  {
    title: 'Interactive Learning',
    description:
      'Engage with interactive content, quizes, and assignments to enhance your learning experience',
    icon: '🎮',
  },
  {
    title: 'Progress Tracking',
    description:
      'Monitor your progress and achievments with detailed analytics and personalized dashboards',
    icon: '📊',
  },
  {
    title: 'Community Support',
    description:
      'Join a vabrant community of learners and instructor to collaborate and share knowledge',
    icon: '👥',
  },
];

export default function Home() {
  return (
    <>
      <section className="relative py-20">
        <div className="flex flex-col items-center text-center space-y-8">
          <Badge variant="outline">The Future of Online Education</Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight capitalize">
            Elevate your learning experience
          </h1>
          <p className="text-muted-foreground max-w-[700px] md:text-xl">
            Discover new way to learn with our modern and interactive learning
            platform. Access high quality courses anytime anywhere
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              className={buttonVariants({
                size: 'lg',
              })}
              href="/courses"
            >
              Explore Courses
            </Link>

            <Link
              className={buttonVariants({
                size: 'lg',
                variant: 'outline',
              })}
              href="/login"
            >
              Sign in
            </Link>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="hover:shadow-lg hover:transition-shadow "
          >
            <CardHeader>
              <div className="text-3xl mb-4">{feature.icon}</div>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </>
  );
}
