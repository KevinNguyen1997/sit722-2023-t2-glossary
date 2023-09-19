const glosarries = [
    {
      id: 1,
      term: "DevSecOps",
      description:
        "An extension of DevOps that incorporates security practices throughout the software development lifecycle to ensure the continuous delivery of secure software.",
      reference:
        "https://aws.amazon.com/what-is/devsecops/#:~:text=DevSecOps%20is%20the%20practice%20of,is%20both%20efficient%20and%20secure.",
    },
    {
      id: 2,
      term: "Deployment Pipeline",
      description:
        "A series of automated steps in the software delivery process, from code commit to production deployment, ensuring code is thoroughly tested and verified before reaching users.",
      reference: "https://www.redhat.com/en/topics/devops/what-cicd-pipeline",
    },
    {
      id: 3,
      term: "Infrastructure as Code (IaC) Tools",
      description:
        "Tools and frameworks like Terraform, CloudFormation, and Azure Resource Manager that enable the declarative definition and management of infrastructure using code.",
      reference:
        "https://www.redhat.com/en/topics/automation/what-is-infrastructure-as-code-iac",
    },
    {
      id: 4,
      term: "Continuous Integration (CI)",
      description:
        "Continuous integration involves the incorporation of the build and unit testing phases into the software release process. With each committed revision, an automated build and test are triggered.",
      reference:
        "https://aws.amazon.com/devops/continuous-integration/#:~:text=Continuous%20integration%20refers%20to%20the,for%20a%20release%20to%20production.",
    },
    {
      id: 5,
      term: "Configuration Management",
      description:
        "The process of managing and maintaining consistent configurations of systems and applications throughout their lifecycle, often achieved using tools like Ansible, Chef, or Puppet.",
      reference:
        "Ian Buchanan, https://www.atlassian.com/microservices/microservices-architecture/configuration-management",
    },
    {
      id: 6,
      term: "Continuous Delivery (CD)",
      description:
        "Continuous delivery streamlines the process of code changes by automatically building, testing, and preparing them for potential release to production. It builds upon continuous integration by not only deploying all code changes to a testing environment but also to a production environment, following the build stage.",
      reference: "https://aws.amazon.com/devops/continuous-delivery/",
    },
    {
      id: 7,
      term: "Feature Flags (Feature Toggles)",
      description:
        "A technique to control the activation of new features in software without redeploying, allowing gradual rollouts and rollbacks based on configuration.",
      reference:
        "ANN MCARTHUR,https://devcycle.com/blog/what-are-feature-flags-in-devops",
    },
    {
      id: 8,
      term: "Microservices",
      description:
        "An architectural style where applications are composed of loosely coupled, independently deployable services, enabling flexibility, scalability, and easier maintenance.",
      reference: "Chris Richardson,https://microservices.io/",
    },
    {
      id: 9,
      term: "Immutable Infrastructure",
      description:
        "An approach where servers and infrastructure components are never modified in-place; instead, they are replaced with new instances for updates and changes.",
      reference: "Bibin Wilson,https://devopscube.com/immutable-infrastructure/",
    },
    {
      id: 10,
      term: "Container Orchestration",
      description:
        "The management and coordination of containerized applications across multiple hosts, ensuring scalability, availability, and resource utilization. Kubernetes and Docker Swarm are popular container orchestration platforms.",
      reference:
        "https://cloud.google.com/discover/what-is-container-orchestration#:~:text=Container%20orchestration%20automatically%20provisions%2C%20deploys,life%20cycle%20management%20of%20containers.",
    },
    {
    id: 11,
    term: "Continuous Monitoring",
    description:
      "Continuous monitoring refers to the practice of constantly observing and analyzing various aspects of a system, process, or service to ensure its smooth functioning and performance. It involves real-time or regular data collection, analysis, and feedback to identify potential issues, optimize performance, and make informed decisions for ongoing improvements.",
    reference:
      "https://www.crowdstrike.com/cybersecurity-101/observability/continuous-monitoring/#:~:text=Continuous%20monitoring%20is%20an%20approach,time%20to%20address%20them%20quickly.",
  },
  {
    id: 12,
    term: "Behavior-driven design (BDD) ",
    description:
      "Behavior-driven design (BDD) is an approach to software development that focuses on clear communication and collaboration between developers, testers, and business stakeholders. It uses natural language statements to describe how the software should behave in different scenarios. Automated tests are then created based on these statements to ensure the software works as expected according to the specified behaviors.",
    reference: "https://cucumber.io/docs/bdd/",
  },
  {
    id: 13,
    term: "Customer-centric action",
    description:
      "DevOps should be driven by a customer-first approach. All decisions and actions taken by the team should prioritize customer satisfaction and experience. By aligning with customer needs, DevOps can deliver solutions that better meet expectations and address pain points.",
    reference:
      "P Mateos,https://www.pufferfish.solutions/post/customer-centric-action-devops-principal-1",
  },
  {
    id: 14,
    term: "Cross-functional autonomous teams",
    description:
      "In companies that build products with self-contained teams, these teams must have the freedom to work independently on the product from start to finish. This includes having all the necessary skills and knowledge to take full responsibility for the entire process.",
    reference:
      "P Mateos, https://www.pufferfish.solutions/post/cross-functional-autonomous-teams-devops-principle-4#:~:text=In%20product%20organisations%20with%20vertical,end%2Dto%2Dend%20responsibility.",
  },
  {
    id: 15,
    term: "End-To-End Responsibility:",
    description:
      "The DevOps team improves product quality and takes more responsibility by providing performance support until the products reach their end-of-life stage.",
    reference: "https://www.devopsagileskills.org/dasa-devops-principles/",
  },
  {
    id: 16,
    term: "Test-driven design (TDD)",
    description:
      "Test-driven design (TDD) is a software development approach where developers write automated tests before writing the actual code. The process involves three main steps: writing a test that describes the desired behavior, running the test (which initially fails), and then writing the code to make the test pass. TDD helps ensure that the code is thoroughly tested, improves code quality, and guides developers to build software that meets the desired requirements.",
    reference: "https://www.spiceworks.com/tech/devops/articles/what-is-tdd/",
  },
  {
    id: 17,
    term: "Agile Methodologies",
    description:
      "Agile methodologies are flexible and collaborative approaches to building software. They involve working in short cycles, delivering small pieces of the product regularly. By involving customers, adapting to changes, and focusing on teamwork, agile methods help create better software that meets customer needs faster and more efficiently.",
    reference:
      "https://www.atlassian.com/agile#:~:text=The%20Agile%20methodology%20is%20a,READ%20ON%20BELOW",
  },
  {
    id: 18,
    term: "Continuous improvement",
    description:
      "Continuous Improvement is at the core of the DevOps culture, aiming to reduce waste and enhance the speed of product or service enhancements. This constant drive for improvement ensures a continuous and iterative refinement of the offerings.",
    reference:
      "https://tkssharma-devops.gitbook.io/devops-training/what-is-devops/devops-principles",
  },
  {
    id: 19,
    term: "Package Management",
    description:
      "A package management system, also known as a package manager, comprises a set of tools that facilitate the creation of complete packages ready for release and deployment. It automates tasks like installing, upgrading, downgrading, configuring, removing, and purging software, streamlining the software management process.",
    reference:
      "https://www.futurelearn.com/info/courses/cloudswyft-msft-introduction-to-devdps-practices/0/steps/184484#:~:text=about%20package%20management.-,A%20package%20management%20system%20or%20package%20manager%20is%20the%20set,configuring%2C%20removing%20and%20purging%20software.",
  },
  {
    id: 20,
    term: "CI Server",
    description:
      "A continuous integration server, also known as a build server, plays a crucial role in managing the shared repository and overseeing incoming code changes. Whenever developers commit their code to the repository, the CI server automatically triggers a build process and records the outcomes of the build.",
    reference:
      "https://about.gitlab.com/topics/ci-cd/continuous-integration-server/#:~:text=What%20does%20a%20CI%20server,the%20results%20of%20the%20build.",
  },
    {
    id: 21,
    term: "Containerization",
    description:
      "Containerization packages applications and dependencies together in a container, providing consistency across different environments.",
    reference:
      "https://www.geeksforgeeks.org/containerization-using-docker/"
  },
  {
    id: 22,
    term: "Docker Swarm",
    description:
      "Docker Swarm is a clustering and orchestration solution for Docker, simplifying containerized application deployment and management.",
    reference:
      "https://docs.docker.com/engine/swarm/"
  },
  {
    id: 23,
    term: "Docker Hub",
    description:
      "Docker Hub is a cloud-based registry service for Docker container images, making it easy to store, manage, and share images.",
    reference:
      "https://www.geeksforgeeks.org/what-is-docker-hub/"
  },
  {
    id: 24,
    term: "Docker Compose",
    description:
      "Docker Compose defines and runs multi-container Docker applications using a YAML file, allowing complex applications to be defined with multiple services and configurations.",
    reference:
      "https://www.howtogeek.com/devops/what-is-docker-compose-and-how-do-you-use-it/"
  },
  {
    id: 25,
    term: "Orchestration",
    description:
      "Orchestration automates the management, deployment, scaling, and operation of containers and services, ensuring proper deployment and connection.",
    reference:
      "https://www.redhat.com/en/topics/automation/what-is-orchestration"
  },
  {
    id: 26,
    term: "Kubernetes",
    description:
      "Kubernetes is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications.",
    reference:
      "https://kubernetes.io/docs/concepts/overview/"
  },
  {
    id: 27,
    term: "Continuous Deployment",
    description:
      "Continuous Deployment (CD) automatically deploys code changes passing automated testing to production environments, reducing manual interventions.",
    reference:
      "https://www.ibm.com/topics/continuous-deployment"
  },
  {
    id: 28,
    term: "Service Discovery",
    description:
      "Service Discovery automatically detects and registers services in containerized applications, managing network communication between services.",
    reference:
      "https://middleware.io/blog/service-discovery/"
  },
  {
    id: 29,
    term: "Blue-Green Deployment",
    description:
      "Blue-Green Deployment maintains two identical environments, deploying the new version to the green environment and switching traffic after testing.",
    reference:
      "https://www.redhat.com/en/topics/devops/what-is-blue-green-deployment"
  },
  {
    id: 30,
    term: "Container Registry",
    description:
      "Blue-Green Deployment maintains two identical environments, deploying the new version to the green environment and switching traffic after testing.",
    reference:
      "https://www.redhat.com/en/topics/cloud-native-apps/what-is-a-container-registry"
  },  
  {
    id: 31,
    term: "Infrastructure as Code (IaC)",
    description:
      "The practice of defining and provisioning infrastructure resources using code instead of manual processes. Terraform is an IaC tool.",
    reference:
      "https://learn.microsoft.com/en-us/devops/deliver/what-is-infrastructure-as-code"
  },
  {
    id: 32,
    term: "Terraform",
    description:
      "An open-source IaC tool by HashiCorp used for defining and provisioning infrastructure resources, such as virtual machines, networks, and storage, in a declarative manner.",
    reference:
      "https://developer.hashicorp.com/terraform/intro"
  },
  {
    id: 33,
    term: "State File",
    description:
      "A JSON or binary file created and managed by Terraform that keeps track of the current state of your infrastructure. It's used to plan and apply changes.",
    reference:
      "https://www.easydeploy.io/blog/terraform-state-file/"
  },
  {
    id: 34,
    term: "Remote State",
    description:
      "Storing the Terraform state file in a remote backend, such as AWS S3 or HashiCorp Consul, for better collaboration and state management.",
    reference:
      "https://developer.hashicorp.com/terraform/language/state/remote"
  },
  {
    id: 35,
    term: "HCL (HashiCorp Configuration Language)",
    description:
      "The language used to write Terraform configuration files, which are human-readable and machine-friendly.",
    reference:
      "https://www.linode.com/docs/guides/introduction-to-hcl/"
  },
  {
    id: 36,
    term: "Resource Block",
    description:
      "A block in Terraform configuration files that defines a resource, including its type and settings.",
    reference:
      "https://developer.hashicorp.com/terraform/language/resources"
  },
  {
    id: 37,
    term: "Terraform Module Registry",
    description:
      "A public repository of pre-built Terraform modules that can be reused in various configurations.",
    reference:
      "https://developer.hashicorp.com/terraform/internals/module-registry-protocol"
  },
  {
    id: 38,
    term: "Terraform Cloud",
    description:
      "A managed service by HashiCorp for collaborating on Terraform configurations and managing state files in a secure and centralized manner.",
    reference:
      "https://www.hashicorp.com/resources/what-is-terraform-cloud"
  },  
  {
    id: 39,
    term: "Terraform Variable",
    description:
      "A parameter in Terraform configurations that allows you to pass values or settings to your infrastructure code dynamically, making configurations more flexible and reusable.",
    reference:
      "https://developer.hashicorp.com/terraform/language/values/variables"
  },
  {
    id: 40,
    term: "Terraform Output",
    description:
      "A way to expose values from your Terraform configuration, making them accessible for reference or use in other configurations or scripts.",
    reference:
      "https://developer.hashicorp.com/terraform/language/values/outputs"
  },
    id: 41,
    term: "Master Node",
    description:
      "The control plane of a Kubernetes cluster, responsible for managing and scheduling workloads.",
    reference:
      "https://www.investopedia.com/terms/m/master-node-cryptocurrency.asp"
  },  
  {
    id: 42,
    term: "Worker Node",
    description:
      "A node in a Kubernetes cluster responsible for running containerized applications.",
    reference:
      "https://www.startkubernetes.com/blog/k8s_master_and_worker_nodes"
  },  
  {
    id: 43,
    term: "Kubelet",
    description:
      "The agent running on each worker node, responsible for maintaining the containers' health and communicating with the control plane.",
    reference:
      "https://kubernetes.io/docs/reference/command-line-tools-reference/kubelet/"
  },  
  {
    id: 44,
    term: "Kube Proxy",
    description:
      "A network proxy on each node that maintains network rules to allow communication to and from the pods.",
    reference:
      "https://kubernetes.io/docs/reference/command-line-tools-reference/kube-proxy/"
  },  
  {
    id: 45,
    term: "StatefulSet",
    description:"A Kubernetes resource for managing stateful applications, ensuring stable network identities and storage.",
    reference:
      "https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/"
  },  
  {
    id: 46,
    term: "Helm",
    description:
      " A package manager for Kubernetes that simplifies the deployment and management of applications using charts.",
    reference:
      "https://helm.sh/"
  },  
  {
    id: 47,
    term: "Prometheus",
    description:
      "An open-source monitoring and alerting toolkit often used with Kubernetes to collect and analyze metrics from applications and infrastructure.",
    reference:
      "https://www.educba.com/kubernetes-prometheus/"
  },  
  {
    id: 48,
    term: "Istio",
    description:
      "An open-source service mesh platform for connecting, securing, and managing microservices in a Kubernetes environment.",
    reference:
      "https://istio.io/"
  },  
  {
    id: 49,
    term: "Ingress",
    description:
      "A Kubernetes resource that manages external access to services, typically acting as an HTTP/HTTPS router.",
    reference:
      "https://kubernetes.io/docs/concepts/services-networking/ingress/"
  },  
  {
    id: 50,
    term: "Container Runtime",
    description:
      "The software responsible for running containers on a node, such as Docker or containerd.",
    reference:
      "https://opensource.com/article/21/9/container-runtimes"
  },  
  ];

  module.exports = { glosarries };
