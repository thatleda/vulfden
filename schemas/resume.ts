import type { Rule } from 'sanity'
import { DocumentTextIcon } from '@sanity/icons'

export default {
  name: 'resume',
  type: 'document',
  title: 'Resume',
  icon: DocumentTextIcon,
  fields: [
    {
      name: 'profile',
      type: 'text',
      title: 'Profile Statement',
      rows: 4,
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'skills',
      type: 'array',
      title: 'Skills',
      of: [
        {
          type: 'object',
          name: 'skillGroup',
          title: 'Skill Group',
          fields: [
            {
              name: 'category',
              type: 'string',
              title: 'Category',
              validation: (Rule: Rule) => Rule.required(),
            },
            {
              name: 'items',
              type: 'array',
              title: 'Skills',
              of: [{ type: 'string' }],
            },
          ],
          preview: {
            select: { title: 'category' },
          },
        },
      ],
    },
    {
      name: 'experience',
      type: 'array',
      title: 'Experience',
      of: [
        {
          type: 'object',
          name: 'experienceEntry',
          title: 'Experience Entry',
          fields: [
            {
              name: 'company',
              type: 'string',
              title: 'Company',
              validation: (Rule: Rule) => Rule.required(),
            },
            {
              name: 'title',
              type: 'string',
              title: 'Job Title',
            },
            {
              name: 'startDate',
              type: 'string',
              title: 'Start Date',
              description: 'e.g. "June 2025"',
            },
            {
              name: 'endDate',
              type: 'string',
              title: 'End Date',
              description: 'e.g. "present" or "January 2025"',
            },
            {
              name: 'location',
              type: 'string',
              title: 'Location',
            },
            {
              name: 'note',
              type: 'string',
              title: 'Note',
              description: 'Optional context, e.g. "Modernization engagement"',
            },
            {
              name: 'bullets',
              type: 'array',
              title: 'Bullet Points',
              of: [{ type: 'text', rows: 2 }],
            },
          ],
          preview: {
            select: { title: 'company', subtitle: 'title' },
          },
        },
      ],
    },
    {
      name: 'education',
      type: 'array',
      title: 'Education',
      of: [
        {
          type: 'object',
          name: 'educationEntry',
          title: 'Education Entry',
          fields: [
            { name: 'degree', type: 'string', title: 'Degree' },
            { name: 'institution', type: 'string', title: 'Institution' },
            { name: 'year', type: 'string', title: 'Year' },
            {
              name: 'note',
              type: 'string',
              title: 'Note',
              description: 'e.g. thesis topic, honors',
            },
          ],
          preview: {
            select: { title: 'institution', subtitle: 'degree' },
          },
        },
      ],
    },
    {
      name: 'additionalSkills',
      type: 'array',
      title: 'Additional',
      of: [{ type: 'string' }],
    },
  ],
}
