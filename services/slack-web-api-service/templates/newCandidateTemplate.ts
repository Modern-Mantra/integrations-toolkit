export function newCandidateTemplate(variables: {
  name: string;
  position: string;
  profileUrl: string;
  priority: string;
  assigneeId: string;
  interviewerCalendlyLink: string;
}): any[] {
  return [
    {
      type: "header",
      text: {
        type: "plain_text",
        text: `New Candidate`,
        emoji: true,
      },
    },
    {
      type: "section",
      fields: [
        {
          type: "mrkdwn",
          text: `*Position Applied:*\n${variables.position}`,
        },
        {
          type: "mrkdwn",
          text: `*Name:*\n<${variables.profileUrl}|${variables.name}>`,
        },
      ],
    },
    {
      type: "section",
      fields: [
        {
          type: "mrkdwn",
          text: `*Priority:*\n${variables.priority}`,
        },
        {
          type: "mrkdwn",
          text: `*Assignee:*\n<@${variables.assigneeId}>`,
        },
      ],
    },
    {
      type: "actions",
      elements: [
        {
          type: "button",
          text: {
            type: "plain_text",
            emoji: true,
            text: "Schedule Interview",
          },
          style: "primary",
          url: variables.interviewerCalendlyLink,
          action_id: "schedule-interview",
        },
        {
          type: "button",
          text: {
            type: "plain_text",
            emoji: true,
            text: "Reject",
          },
          style: "danger",
          value: "click_me_123",
        },
      ],
    },
  ];
}
